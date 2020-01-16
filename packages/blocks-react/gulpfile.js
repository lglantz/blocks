const { series, src, dest } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const replace = require('gulp-string-replace');
const del = require('del');
const ts = require('gulp-typescript');

function clean(cb) {
  return del(['dist'], cb);
}

function transpileJSX() {
  return src('./components/*/*.jsx')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015', 'react'],
      plugins: [
        "transform-object-rest-spread"
      ]
    }))
    .pipe(replace(/\.jsx/g, '.js', { logs: { enabled: false } }))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(dest('./dist'));
}

function compileTSX() {
return src('./components/{*/*,*}.{ts,tsx}')
    .pipe(sourcemaps.init())
    .pipe(ts({
      jsx: 'react',
      declaration: true,
    }))
    .pipe(dest('./dist'));
}

exports.build = series(
  clean,
  transpileJSX,
  compileTSX
);
