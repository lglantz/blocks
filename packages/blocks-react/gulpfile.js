const { series, src, dest } = require('gulp');
const babel = require('gulp-babel');
const replace = require('gulp-string-replace');
const del = require('del');

function clean(cb) {
  return del(['dist'], cb);
}

function transpileJSX() {
  return src('./components/*/*.jsx')
    .pipe(babel({
      presets: ['es2015', 'react'],
      plugins: [
        "transform-object-rest-spread"
      ]
    }))
    .pipe(replace(/\.jsx/g, '.js', { logs: { enabled: false } }))
    .pipe(dest('./dist'));
}

exports.build = series(
  clean,
  transpileJSX
);
