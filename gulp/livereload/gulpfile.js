var gulp = require('gulp');
var livereload = require('gulp-livereload');


gulp.task('watch', function () {    // 这里的watch，是自定义的，写成live或者别的也行

    livereload.listen(3000);

    // app/**/*.*的意思是 app文件夹下的 任何文件夹 的 任何文件
    gulp.watch('app/**/*.*', function (file) {
        livereload.changed(file.path);
    });
});
