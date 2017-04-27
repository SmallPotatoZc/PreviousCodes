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
