var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');

gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('watch', ['browserSync', 'sass'], function() {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/**/*.js', browserSync.reload);
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    })
})

gulp.task('useref', function() {
    return gulp.src('app/*.html')
        .pipe(useref())
        // Minifies only if it's a JavaScript file
        // .pipe(gulpIf('*.js', uglify()))
        // Minifies only if it's a CSS file
        // .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dist'))
})

gulp.task('images', function() {
    return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
        .pipe(gulp.dest('dist/images'))
})

gulp.task('components', function() {
    return gulp.src('app/modules/**/*.html')
        .pipe(gulp.dest('dist/components'))
})

gulp.task('api', function() {
    return gulp.src('app/api/**/*')
        .pipe(gulp.dest('dist/api'))
})

gulp.task('clean:dist', function() {
    return del.sync('dist')
})

gulp.task('build', function(callback) {
    runSequence('clean:dist', ['sass', 'useref', 'images', 'components', 'api'],
        callback
    )
})
gulp.task('default', function(callback) {
    runSequence(['sass', 'browserSync', 'watch'], callback)
})
