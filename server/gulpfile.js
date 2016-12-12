var gulp = require('gulp');

var build_dir='./'
gulp.task('default', ['watch']);


gulp.task('build_lib', function() {
    return gulp.src('src/lib/*.js').pipe(gulp.dest(build_dir+'/lib'));
});
gulp.task('build',['build_lib'], function() {
    return gulp.src('src/*.js').pipe(gulp.dest(build_dir));
});

gulp.task('watch', ['build'], function() {

    gulp.watch(["./src/*.js","src/lib/*.js"],['server']);

});
