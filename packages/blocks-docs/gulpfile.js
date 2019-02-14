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

const cssPlugins = [
  autoprefixer(),
  cssvariables({ preserve: true })
];

// compile Blocks documentation Stylus files into a final CSS file for the documentation site
gulp.task('build:blocksDocsCSS', () => {
  gulp.src('_styl/_all.styl')
    .pipe(stylus({
      'include css': true
    }))
    .pipe(postcss(cssPlugins))
    .pipe(rename('blocks-docs.css'))
    .pipe(gulp.dest('css'));
});

// rebuild all CSS
gulp.task('build:css', ['build:blocksDocsCSS'], () => {
  gulp.src('node_modules/blocks-base/blocks.css')
    .pipe(gulp.dest('css/'));
});

// watch CSS files for changes
gulp.task('watch:css', ['build:css'], () => {
  gulp.watch(['_styl/*.styl', 'node_modules/blocks-base/styles/*.styl'], ['build:css']);
});

// copy fonts into documentation site
gulp.task('build:fonts', () => {
  gulp.src(['node_modules/blocks-base/fonts/*.eot', 'node_modules/blocks-base/fonts/*.woff', 'node_modules/blocks-base/fonts/*.woff2'])
    .pipe(gulp.dest('fonts/'));
});

// copy SVG icons into documentation site
gulp.task('build:icons', () => {
  gulp.src('node_modules/blocks-base/svgs/*.svg')
    .pipe(gulp.dest('svgs/'));

  gulp.src('favicon.ico')
    .pipe(gulp.dest(''));
});

// build vendor JS bundle
const vendors = ['react', 'react-dom', 'react-router-dom', 'prop-types', 'blocks-react'];
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
    .pipe(gulp.dest(path.join(__dirname, './lib')));
});

// build a separate JS bundle for each React component
gulp.task('bundle:react', (done) => {
  return glob('./_javascript/*.jsx', (err, files) => {
    if (err) { return done(err); }
    const tasks = files.map((entry) => {
      return createBundle(entry);
    });
    return es.merge(tasks).on('end', done);
  });
});

// build and watch a separate JS bundle for each React component
gulp.task('watch:react', (done) => {
  return glob('./_javascript/*.jsx', (err, files) => {
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

  const name = entry.split('/')[2].split('.')[0];
  return b.external(vendors)
    .bundle()
    .pipe(source(`${name}.js`))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(path.join(__dirname, './lib')));
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
    const name = entry.split('/')[2].split('.')[0];
    return b.external(vendors)
      .bundle()
      .pipe(source(`${name}.js`))
      .pipe(buffer())
      .pipe(gulp.dest(path.join(__dirname, './lib')));
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
    '_site',
    'css',
    'fonts',
    'lib',
    'svgs'
  ]);
});

// build, serve, and watch documentation site
gulp.task('server', [
  'build:fonts',
  'build:icons',
  'watch:css',
  'bundle:vendor',
  'watch:react',
], () => {
  const jekyll = child.spawn('jekyll', ['serve',
    '--source',
    './',
    '--destination',
    '_site',
    '--watch',
    '--incremental',
    '--drafts'
  ]);

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

// build documentation site
gulp.task('build', [
  'build:fonts',
  'build:icons',
  'build:css',
  'bundle:vendor',
  'bundle:react'
], () => {
  const jekyll = child.spawn('jekyll', ['build',
    '--source',
    './',
    '--destination',
    '_site'
  ]);

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);

  jekyll.on('exit', () => {
    console.log('site build complete');
  });
});
