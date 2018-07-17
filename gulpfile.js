'use strict';

const gulp = require('gulp'),
      sass = require('gulp-sass'),
      clean = require('gulp-clean-css');
 
gulp.task('sass', function () {
  return gulp.src('src/assets/sass/styles.scss')
    .pipe(sass())
    .pipe(clean())
    .pipe(gulp.dest('./src'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/assets/sass/bootstrap/*.scss', ['sass']);
});

gulp.task('default', function() {
  gulp.run('sass');
  gulp.run('sass:watch');

});
