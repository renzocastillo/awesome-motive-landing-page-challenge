const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const srcFile = 'css/style.scss';


const buildStyles = () => {
  return gulp.src(srcFile)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest('css/'))
}
const watchSass = () => {
    gulp.watch(srcFile, buildStyles);
}
exports.build = buildStyles;
exports.watch = watchSass;
exports.default = watchSass;

