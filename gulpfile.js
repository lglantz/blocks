const gulp = require('gulp');
const child = require('child_process');
const gutil = require('gulp-util');
const stylus = require('gulp-stylus');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('dev:css', function () {
  gulp.src('docs/_styl/blocks-docs.styl')
    .pipe(stylus())
    .pipe(autoprefixer())
    .pipe(gulp.dest('docs/'));
});

gulp.task('watch:css', function () {
  gulp.watch(['docs/_styl/*.styl'], ['dev:css']);
});

gulp.task('dev:fonts', function() {
  gulp.src('fonts/*.otf')
    .pipe(gulp.dest('docs/fonts/'));
});

gulp.task('dev:icons', function() {
  gulp.src('svgs/icon-*.svg')
    .pipe(gulp.dest('docs/svgs/'));
});

gulp.task('dev:jekyll', () => {
  const jekyll = child.spawn('jekyll', ['serve',
    '--source',
    'docs',
    '--destination',
    'docs/_site',
    '--watch',
    '--livereload',
    '--incremental',
    '--drafts'
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
  'dev:jekyll',
  'dev:fonts',
  'dev:icons',
  'dev:css',
  'watch:css'
]);