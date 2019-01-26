var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var minify = require('gulp-minify');
var cssnano = require('gulp-cssnano')
var del = require('del');
var order = require("gulp-order");
var inject = require('gulp-inject');
var rename = require('gulp-rename');
var wiredep = require('wiredep').stream;
var runSequence = require('run-sequence');


gulp.task('inject:bower', function () {
    return gulp.src('./src/index.html')
        .pipe(wiredep())
        .pipe(gulp.dest('./src'))
});

gulp.task('inject', function () {
    var target = gulp.src('./src/index.html');
    var sources = gulp.src(['./src/*.js', './src/modules/**/*.js', '!./src/bower_components/**/*.js'], { read: false })
        .pipe(order([
            'app.modules.js',
            'app.routes.js',
            'app.constants.js'
        ]));

    return target
        .pipe(inject(sources, { relative: true }))
        .pipe(gulp.dest('./src'))
});

gulp.task('sass', function() {
    return gulp.src('./src/theme/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('watch:sass', ['browserSync', 'sass'], function() {
    gulp.watch('./src/theme/**/*.scss', ['sass']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('./src/*.html', browserSync.reload);
    gulp.watch('./src/**/*.js', browserSync.reload);
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: './src'
        }
    })
})

gulp.task('browserSync:public', function () {
    browserSync.init({
        server: {
            baseDir: '../server/public'
        }
    })
});

gulp.task('delete:public', function () {
    return del.sync('../server/public', {force: true})
});

gulp.task('copy:index:rewire', function () {
    return gulp.src(['./src/index.html'])
        .pipe(useref())
        .pipe(gulp.dest('../server/public'))
});

gulp.task('copy:images', function() {
    return gulp.src('./src/images/**/*.+(png|jpg|jpeg|gif|svg)')
        .pipe(gulp.dest('../server/public/images'))
})

gulp.task('copy:modules', function() {
    return gulp.src('./src/modules/**/*.html')
        .pipe(gulp.dest('../server/public/modules'))
})

gulp.task('build:modules:rename:ejs', function () {
    return gulp.src('../server/public/modules/**/*.html')
    .pipe(rename(function (path) {
        path.extname = ".ejs";
      }))
        .pipe(gulp.dest('../server/public/modules'))
});

gulp.task('copy:api', function() {
    return gulp.src('./src/api/**/*')
        .pipe(gulp.dest('../server/public/api'))
})

gulp.task('build:compress:css', function () {
    return gulp.src('../server/public/css/*')
        .pipe(cssnano())
        // .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('../server/public/css'))
});

gulp.task('build:compress:js', function () {
    var renameJS = gulp.src('../server/public/js/vendor.min.js')
        .pipe(rename('vendor.js'))
        .pipe(gulp.dest('../server/public/js'));

    var minifyJS = gulp.src('../server/public/js/vendor.js')
        .pipe(minify({
            ext: {
                src: '.js',
                min: '.min.js'
            }
        }))
        .pipe(gulp.dest('../server/public/js'));
    return renameJS, minifyJS;
});

gulp.task('build:copy', ['copy:index:rewire', 'copy:images', 'copy:modules', 'copy:api'], function (callback) {
    callback();
});

gulp.task('build:copy:ejs', ['copy:index:rewire', 'copy:images', 'copy:modules:ejs', 'copy:api'], function (callback) {
    callback();
});

gulp.task('build:compress', ['build:compress:css', 'build:compress:js'], function (callback) {
    callback();
});

gulp.task('build', function (callback) {
    runSequence('delete:public', 'build:copy', 'build:modules:rename:ejs', callback)
});

gulp.task('build:start', function (callback) {
    runSequence('browserSync:public', callback)
});

gulp.task('default', function(callback) {
    runSequence(['sass', 'browserSync', 'watch:sass'], callback)
})
