var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

var config = require('./config.json');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function () {

    browserSync.init({
        watch: true,
        server: {
            baseDir: './source'
        }
    });

    // gulp.watch(config.path.styles.sourceFolder + '**/*.scss', ['sass']);
    // gulp.watch(config.path.styles.sourceFolder + '**/*.*').on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {

    return gulp.src(config.path.styles.sourceFolder + config.path.styles.sourceIndex )
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.path.styles.destinationFolder))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('default', ['serve'])
