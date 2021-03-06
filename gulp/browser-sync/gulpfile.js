var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('server', function(){
  browserSync.init({
    server: {
      baseDir: '../app/',
      proxy: '3001'
    }
  });

  gulp.watch('../app/*.html').on('change', reload);
});

gulp.task('default', ['server']);
