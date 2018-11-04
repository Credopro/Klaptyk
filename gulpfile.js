'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    return gulp.src('scss/style_sass.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());
});

gulp.task('watch', function () {
    gulp.watch('scss/*.+(sass|scss)', gulp.series('sass'));
    gulp.watch('**/*.html', browserSync.reload);
    gulp.watch('**/css/*.css', browserSync.reload);
    gulp.watch('js/**/*.js', browserSync.reload);
});

gulp.task('browserSync', function () {
    browserSync.init({
        proxy: "klaptyk"
    });
});

gulp.task('default', gulp.series('watch'));