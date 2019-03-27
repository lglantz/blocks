const gulp = require('gulp');
const babel = require('gulp-babel');
const replace = require('gulp-string-replace');

const compileDir = (dir) => {
  return gulp.src(`./${dir}/*.jsx`)
    .pipe(babel({
        presets: ['es2015', 'react']
    }))
    .pipe(replace(/\.jsx/g, '.js', { logs: { enabled: false } }))
    .pipe(gulp.dest(`./dist/${dir}`))  
}

const components = [
  'accordion',
  'alerts',
  'buttons',
  'dropdowns',
  'icons',
  'input',
  'lists',
  'modals',
  'progress',
  'table',
  'tabs',
  'tooltips',
  'wrappers'
];

const tasks = components.map((component) => {
  const taskName = `compile:${component}`;
  gulp.task(taskName, () => compileDir(component));
  return taskName;
});

gulp.task('build', [...tasks]);
