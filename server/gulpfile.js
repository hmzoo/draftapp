
var gulp = require('gulp');

gulp.task('default', ['watch']);


gulp.task('lib', function() {
    return gulp.src('src/lib/*.js').pipe(gulp.dest('./lib'));
});
gulp.task('server',['lib'], function() {
    return gulp.src('src/*.js').pipe(gulp.dest('./'));
});

gulp.task('watch', ['server'], function() {

    gulp.watch(["./src/*.js","src/lib/*.js"],['server']);

});
