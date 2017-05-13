var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('build', function(){
  return browserify({entries: './src/**/*.js', debug: true})
          .transform('babelify', {presets: ['es2015']})
          .bundle()
          .pipe(source('app.js'))
          .pipe(buffer())
          .pipe(sourcemaps.init())
          .pipe(uglify())
          .pipe(sourcemaps.write('./maps'))
          .pipe(gulp.dest('./dist/js'));
});

gulp.task('watch', ['build'], function(){
  browserSync.init({
    server: {
      baseDir: '../dist/',
      proxy: '3001'
    }
  });

  gulp.watch('../app/*.html').on('change', reload);
});

gulp.task('default', ['build', 'watch']);
