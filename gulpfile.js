const gulp = require('gulp');
const child = require('child_process');
const gutil = require('gulp-util');
const rename = require('gulp-rename');
const stylus = require('gulp-stylus');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvariables = require('postcss-css-variables');
const path = require('path');
const del = require('del');

const watchify = require('watchify');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const es = require('event-stream');
const glob = require('glob');

const jsonSass = require('gulp-json-sass');
const jsonStylus = require('gulp-json-stylus');
const concat = require('gulp-concat');

const fs = require('fs');


const cssPlugins = [
  autoprefixer(),
  cssvariables({ preserve: true })
];

// create SASS variables from variables.json
gulp.task('build:sassVariables', () => {
  return gulp.src('./blocks-styles/variables.json')
    .pipe(jsonSass({
      sass: true
    }))
    .pipe(gulp.dest('./blocks-styles'))
});

// create Stylus variables from variables.json
gulp.task('build:stylusVariables', () => {
  return gulp.src('./blocks-styles/variables.json')
          .pipe(jsonStylus({ namespace : "$" }))
          .pipe(concat('variables.styl'))
          .pipe(gulp.dest('./blocks-styles'));
});

// concat Stylus variable files into a single file
gulp.task('bundle:stylusVariables', ['build:stylusVariables'], () => {
  return gulp.src(['./blocks-styles/variables-base-fonts.styl', './blocks-styles/variables.styl', './blocks-styles/variables-base-root.styl'])
          .pipe(concat('variables.styl'))
          .pipe(gulp.dest('./blocks-styles'));
});

// compile separate Blocks Stylus files into a final CSS output file
gulp.task('build:blocksCSS', () => {
  gulp.src('blocks-styles/_all.styl')
    .pipe(stylus({
      'include css': true
    }))
    .pipe(postcss(cssPlugins))
    .pipe(rename('blocks.css'))
    .pipe(gulp.dest('.'));
});

// compile Blocks documentation Stylus files into a final CSS file for the documentation site
gulp.task('build:blocksDocsCSS', () => {
  gulp.src('docs/_styl/blocks-docs.styl')
    .pipe(stylus({
      'include css': true
    }))
    .pipe(postcss(cssPlugins))
    .pipe(gulp.dest('docs/css'));
});

// rebuild all CSS
gulp.task('build:css', ['build:sassVariables', 'bundle:stylusVariables', 'build:blocksCSS', 'build:blocksDocsCSS'], () => {
  gulp.src('blocks.css')
    .pipe(gulp.dest('docs/css/'));
});

// watch CSS files for changes
gulp.task('watch:css', () => {
  gulp.watch(['docs/_styl/*.styl', 'blocks-styles/*.styl'], ['build:css']);
});

// copy fonts into documentation site
gulp.task('build:fonts', () => {
  gulp.src(['fonts/*.eot', 'fonts/*.woff', 'fonts/*.woff2'])
    .pipe(gulp.dest('docs/fonts/'));
});

// copy SVG icons into documentation site
gulp.task('build:icons', () => {
  gulp.src('svgs/*.svg')
    .pipe(gulp.dest('docs/svgs/'));

  gulp.src('favicon.ico')
    .pipe(gulp.dest('docs/'));
});

// build vendor JS bundle
const vendors = ['react', 'react-dom', 'react-router-dom', 'prop-types'];
gulp.task('bundle:vendor', () => {
  const b = browserify({
    debug: false
  });

  // require all libs specified in vendors array
  vendors.forEach(lib => {
    b.require(lib);
  });

  return b.bundle()
    .pipe(source('vendor.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(path.join(__dirname, './docs/lib')));
});

// build a separate JS bundle for each React component
gulp.task('bundle:react', (done) => {
  return glob('./docs/_javascript/*.jsx', (err, files) => {
    if (err) { return done(err); }
    const tasks = files.map((entry) => {
      return createBundle(entry);
    });
    return es.merge(tasks).on('end', done);
  });
});

// build and watch a separate JS bundle for each React component
gulp.task('watch:react', (done) => {
  return glob('./docs/_javascript/*.jsx', (err, files) => {
    if (err) { return done(err); }
    const tasks = files.map((entry) => {
      return createAndUpdateBundle(entry);
    });
    return es.merge(tasks).on('end', done);
  });
});

// helper for creating React bundles
const createBundle = (entry) => {
  let b = browserify({
    entries: [entry],
    extensions: ['.jsx'],
    debug: false,
    cache: {},
    packageCache: {},
    transform: [
      babelify.configure({
        presets: ['es2015', 'react']
      })
    ]
  });

  b.on('log', gutil.log);

  const name = entry.split('/')[3].split('.')[0];
  return b.external(vendors)
    .bundle()
    .pipe(source(`${name}.js`))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(path.join(__dirname, './docs/lib')));
};

// helper for creating and updating React bundles
const createAndUpdateBundle = (entry) => {
  let b = browserify({
    entries: [entry],
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    transform: [
      babelify.configure({
        presets: ['es2015', 'react']
      })
    ]
  }).plugin(watchify);

  const bundle = () => {
    const name = entry.split('/')[3].split('.')[0];
    return b.external(vendors)
      .bundle()
      .pipe(source(`${name}.js`))
      .pipe(buffer())
      .pipe(gulp.dest(path.join(__dirname, './docs/lib')));
  }

  b.on('update', bundle);
  b.on('log', gutil.log);

  return bundle();
}

const jekyllLogger = (buffer) => {
  buffer.toString()
    .split(/\n/)
    .forEach((message) => gutil.log('Jekyll: ' + message));
};

gulp.task('clean', () => {
  return del([
    'docs/_site',
    'docs/css',
    'docs/fonts',
    'docs/lib',
    'docs/svgs'
  ]);
});

gulp.task('build:assets', [
  'build:fonts',
  'build:icons',
  'build:css',
  'bundle:vendor'
]);

// build, serve, and watch documentation site
gulp.task('server', [
  'build:assets',
  'watch:react',
  'watch:css'
], () => {
  const jekyll = child.spawn('jekyll', ['serve',
    '--source',
    'docs',
    '--destination',
    'docs/_site',
    '--watch',
    '--incremental',
    '--drafts'
  ]);


  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

// build documentation site
gulp.task('build', [
  'build:assets',
  'bundle:react'
], () => {
  const jekyll = child.spawn('jekyll', ['build', 
    '--source',
    'docs',
    '--destination',
    'docs/_site'
  ]);

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);

  jekyll.on('exit', () => {
    console.log('done building');
    console.log('site files: ');
    const dir = 'docs/_site/';
    const siteFiles = walkSync(dir, []);
    siteFiles.forEach((file) => {
      console.log(file);
    });
  });
});

const walkSync = (dir, fileList) => {
  const files = fs.readdirSync(dir);
  fileList = fileList || [];
  files.forEach((file) => {
    if (fs.statSync(dir + file).isDirectory()) {
      fileList = walkSync(dir + file + '/', fileList);
    } else {
      fileList.push(dir + file);
    }
  });
  return fileList
};
