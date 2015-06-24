var gulp = require('gulp')
var concat = require('gulp-concat')
var sourcemaps = require('gulp-sourcemaps')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')
 
gulp.task('js', function () {
  
  gulp.src(['static/lib/angular/angular.min.js', 
  	'static/lib/angular/angular-route.js', 
  	'static/lib/angular/angular-resource.min.js', 'static/**/*.js'])
    .pipe(sourcemaps.init())
      .pipe(concat('static/app.js'))
      .pipe(ngAnnotate())
      // .pipe(uglify())
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest('.'))
})

gulp.task('watch', ['js'], function () {
  gulp.watch('static/js/*.js', ['js'])
})
