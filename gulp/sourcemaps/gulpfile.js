var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('javascript', function() {
  gulp.src('../src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.mapSources(function(sourcePath, file){
      console.log('path', sourcePath);
      return '../src/' + sourcePath;
    }))
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('./dist'));
});
