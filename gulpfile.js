const gulp = require('gulp');
const child = require('child_process');
const gutil = require('gulp-util');
const rename = require('gulp-rename');
const stylus = require('gulp-stylus');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvariables = require('postcss-css-variables');
const path = require('path');

const watchify = require('watchify');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');

const jsonSass = require('gulp-json-sass');
const jsonStylus = require('gulp-json-stylus');
const concat = require('gulp-concat');


gulp.task('dev:css', ['dev:jsonToStylus'], function () {
  const plugins = [
    autoprefixer(),
    cssvariables({ preserve: true })
  ];

  gulp.src('blocks-styles/_all.styl')
    .pipe(stylus({
      'include css': true
    }))
    .pipe(postcss(plugins))
    .pipe(rename('blocks.css'))
    .pipe(gulp.dest('.'));

  gulp.src('docs/_styl/blocks-docs.styl')
    .pipe(stylus({
      'include css': true
    }))
    .pipe(postcss(plugins))
    .pipe(gulp.dest('docs/css'));

  gulp.src('blocks.css')
    .pipe(gulp.dest('docs/css/'));
});

gulp.task('watch:css', ['dev:jsonToStylus'], function () {
  gulp.watch(['docs/_styl/*.styl', 'blocks-styles/*.styl', 'fonts/fonts.css'], ['dev:css']);
});

gulp.task('dev:fonts', function() {
  gulp.src(['fonts/*.eot', 'fonts/*.woff', 'fonts/*.woff2'])
    .pipe(gulp.dest('docs/css/'));
});

gulp.task('dev:icons', function() {
  gulp.src('svgs/icon-*.svg') // TODO: this doesn't handle the CBRE svg
    .pipe(gulp.dest('docs/svgs/'));
});

gulp.task('dev:jekyll', () => {
  const jekyll = child.spawn('jekyll', ['serve',
    '--source',
    'docs',
    '--destination',
    'docs/_site',
    '--port', // TODO: move to _config.yml file?
    '8080',
    '--watch',
    '--incremental',
    '--drafts',
    '--baseurl', // allow access of docs on localhost normally - when deployed,
    ''           // baseurl is blocks/ for use with github pages
  ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

const vendors = ['react', 'react-dom', 'react-router-dom'];
gulp.task('build:vendor', () => {
  const b = browserify({
    debug: true
  });

  // require all libs specified in vendors array
  vendors.forEach(lib => {
    b.require(lib);
  });

  b.bundle()
  .pipe(source('vendor.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest('./docs/lib/'))
  ;
});

const components = [
  './docs/_javascript/AccordionPreview.jsx',
  './docs/_javascript/AlertPreview.jsx',
  './docs/_javascript/ButtonPreview.jsx',
  './docs/_javascript/CheckboxPreview.jsx',
  './docs/_javascript/DropdownPreview.jsx',
  './docs/_javascript/ModalPreview.jsx',
  './docs/_javascript/ProgressPreview.jsx',
  './docs/_javascript/RadioButtonPreview.jsx',
  './docs/_javascript/SortableListPreview.jsx',
  './docs/_javascript/TabPreview.jsx',
  './docs/_javascript/TextFieldPreview.jsx',
  './docs/_javascript/TogglePreview.jsx'
];
gulp.task('dev:react', () => {
  components.forEach((file) => {
    const b = browserify({
      entries: file,
      extensions: ['.jsx'],
      debug: true,
      cache: {},
      packageCache: {},
      plugin: [watchify],
      transform: [
        babelify.configure({
          presets: ['es2015', 'react']
        })
      ]
    });
    let outFileName = file.split('/')[3];
    outFileName = outFileName.substr(0, outFileName.length - 1);

    function bundle() {
      return b.external(vendors)
        .bundle()
        .pipe(source(outFileName))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./docs/lib'));
    }

    b.on('update', bundle);

    return bundle();
  })
});

gulp.task('dev:jsonToSass', () => {
  return gulp.src('./blocks-styles/variables.json')
    .pipe(jsonSass({
      sass: true
    }))
    .pipe(gulp.dest('./blocks-styles'))
});

gulp.task('stylusGeneration', () => {
  return gulp.src('./blocks-styles/variables.json')
          .pipe(jsonStylus({ namespace : "$" }))
          .pipe(concat('variables.styl'))
          .pipe(gulp.dest('./blocks-styles'));
});

gulp.task('dev:jsonToStylus', ['stylusGeneration'], () => {
  return gulp.src(['./blocks-styles/variables-base-fonts.styl', './blocks-styles/variables.styl', './blocks-styles/variables-base-root.styl'])
          .pipe(concat('variables.styl'))
          .pipe(gulp.dest('./blocks-styles'));

})

gulp.task('server', [
  'dev:fonts',
  'dev:icons',
  'dev:css',
  'build:vendor',
  'dev:react',
  'dev:jekyll',
  'watch:css',
  'dev:jsonToSass',
  'dev:jsonToStylus'
]);