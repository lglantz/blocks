const { series, src, dest } = require('gulp');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const stylus = require('stylus');
const fs = require('fs');
const through = require('through2');
const del = require('del');
const autoprefixer = require('autoprefixer');
const cssvariables = require('postcss-css-variables');


const cssPlugins = [
  autoprefixer(),
  cssvariables({ preserve: true })
];

function buildStylusVariableLine(key, value) {
  return '$' + key + ' = ' + value + '\n';
}

function buildSassVariableLine(key, value) {
  return '$' + key + ': ' + value + '\n';
}

function buildStyleVariablesFromJson(cb) {
  const variableJson = require('./styles/variables.json');
  
  let outputStylus = '';
  let outputSass = '';

  const variableNames = Object.keys(variableJson);
  for (let i = 0; i < variableNames.length; i++) {
    const name = variableNames[i];
    const value = variableJson[name];

    if (typeof value === 'object') {
      const suffixes = Object.keys(value);
      for (let j = 0; j < suffixes.length; j++) {
        const suffix = suffixes[j];
        const suffixedName = name + '-' + suffix;
        const suffixedValue = value[suffix];

        outputStylus += buildStylusVariableLine(suffixedName, suffixedValue);
        outputSass += buildSassVariableLine(suffixedName, suffixedValue);
      }
    } else if (typeof value === 'string') {
      outputStylus += buildStylusVariableLine(name, value);
      outputSass += buildSassVariableLine(name, value);
    }
  }

  fs.writeFile('./styles/variables.styl', outputStylus, function(err) {
    if (err) return cb(err);
    fs.writeFile('./styles/variables.sass', outputSass, cb);
  });
}

function renderStylus(options) {
  const opts = Object.assign({}, options);
  return through.obj(function(file, enc, cb) {

    opts.filename = file.path;

    stylus.render(file.contents.toString(enc || 'utf-8'), opts, function(err, res) {
      if (err) return cb(err);

      if (res) file.contents = new Buffer(res);

      return cb(null, file);
    });
  });
}

function clean(cb) {
  return del(['dist'], cb);
}

function buildBlocksCSS() {
  return src('./styles/_all.styl')
    .pipe(renderStylus({
      'include css': true,
      compress: true
    }))
    .pipe(postcss(cssPlugins))
    .pipe(rename('blocks.css'))
    .pipe(dest('./dist'));
}

exports.build = series(
  clean,
  buildStyleVariablesFromJson,
  buildBlocksCSS
);
