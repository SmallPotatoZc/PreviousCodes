<<<<<<< HEAD
var gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('default', ['connect', 'watch']);

/**
 * gulp-connect api
 * root []'' 根路径 默认为gulpfile.js
 * port Num
 * host '' localhost
 * name '' Server
 * https
 * livereload {}Boo
 * livereload.port Num 35729
 * livereload.hostname '' undefined
 * fallback undefined
 * middleware Fn []
 * debug Boo false
 * index Boo true
 */

gulp.task('connect', function(){
  connect.server({
    root: 'src',
    port: 8889,
    livereload: true
  });
});

gulp.task('html', function(){
  gulp.src('./src/**/*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./src/**/*.html'], ['html']);
});
=======
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
  browserify({entries: './app/index.js', debug: false})
          .transform('babelify', {presets: ['es2015']})
          .bundle()
          .pipe(source('index.js'))
          //.pipe(buffer())
          //.pipe(sourcemaps.init())
          //.pipe(uglify())
          //.pipe(sourcemaps.write('./maps'))
          .pipe(gulp.dest('./app/dist/js'));
});

gulp.task('watch', ['build'], function(){
  browserSync.init({
    server: {
      baseDir: './app',
      server: "./",
      proxy: 3001
    }
  });

  gulp.watch('./app/**/*.js', ['build']);
  gulp.watch('./app/**/*').on('change', reload);
});

gulp.task('default', ['build', 'watch']);
>>>>>>> zhangChao
