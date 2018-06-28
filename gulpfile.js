const gulp = require('gulp');
const child = require('child_process');
const gutil = require('gulp-util');
const rename = require('gulp-rename');
const stylus = require('gulp-stylus');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvariables = require('postcss-css-variables');

gulp.task('dev:css', function () {
  const plugins = [
    autoprefixer(),
    cssvariables({ preserve: true })
  ];
  gulp.src('docs/_styl/blocks-docs.styl')
    .pipe(stylus())
    .pipe(postcss(plugins))
    .pipe(gulp.dest('docs/css'));

  gulp.src('blocks-styles/_all.styl')
    .pipe(stylus())
    .pipe(postcss(plugins))
    .pipe(rename('blocks.css'))
    .pipe(gulp.dest('.'));
});

gulp.task('watch:css', function () {
  gulp.watch(['docs/_styl/*.styl', 'blocks-styles/*.styl'], ['dev:css']);
});

gulp.task('dev:fonts', function() {
  gulp.src('fonts/*.otf')
    .pipe(gulp.dest('docs/fonts/'));
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

gulp.task('server', [
  'dev:fonts',
  'dev:icons',
  'dev:css',
  'dev:jekyll',
  'watch:css'
]);