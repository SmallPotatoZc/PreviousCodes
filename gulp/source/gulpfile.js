var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
  var bundleStream = browserify('../app/index.js').bundle();

  bundleStream
    .pipe(source('index.js'))
    .pipe(gulp.dest('./'))
})
