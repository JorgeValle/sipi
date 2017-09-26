'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('src/assets/sass/sipi.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/assets/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/assets/sass/bootstrap/*.scss', ['sass']);
});

gulp.task('default', function() {
  gulp.run('sass');
  gulp.run('sass:watch');

});
