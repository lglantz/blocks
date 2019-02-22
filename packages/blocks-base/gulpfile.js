const gulp = require('gulp');
const rename = require('gulp-rename');
const stylus = require('gulp-stylus');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvariables = require('postcss-css-variables');

const jsonSass = require('gulp-json-sass');
const jsonStylus = require('gulp-json-stylus');
const concat = require('gulp-concat');

const cssPlugins = [
  autoprefixer(),
  cssvariables({ preserve: true })
];

// create SASS variables from variables.json
gulp.task('build:sassVariables', () => {
  return gulp.src('./styles/variables.json')
    .pipe(jsonSass({
      sass: true
    }))
    .pipe(gulp.dest('./styles'))
});

// create Stylus variables from variables.json
gulp.task('build:stylusVariables', () => {
  return gulp.src('./styles/variables.json')
          .pipe(jsonStylus({ namespace : "$" }))
          .pipe(concat('variables.styl'))
          .pipe(gulp.dest('./styles'));
});

// concat Stylus variable files into a single file
gulp.task('bundle:stylusVariables', ['build:stylusVariables'], () => {
  return gulp.src(['./styles/variables-base-fonts.styl', './styles/variables.styl', './styles/variables-base-root.styl'])
          .pipe(concat('variables.styl'))
          .pipe(gulp.dest('./styles'));
});

// compile separate Blocks Stylus files into a final CSS output file
gulp.task('build:blocksCSS', () => {
  gulp.src('styles/_all.styl')
    .pipe(stylus({
      'include css': true
    }))
    .pipe(postcss(cssPlugins))
    .pipe(rename('blocks.css'))
    .pipe(gulp.dest('./dist'));
});


// rebuild all CSS
gulp.task('build', ['build:sassVariables', 'bundle:stylusVariables', 'build:blocksCSS']);
