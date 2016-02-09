const gulp      = require('gulp'),
    browserSync = require('browser-sync').create(),
    concat      = require('gulp-concat'),
    sourcemaps  = require('gulp-sourcemaps');

// process JS files and return the stream
gulp.task('js', function () {
    return gulp.src('./app/src/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))
        .pipe(sourcemaps.write())    
        .pipe(gulp.dest('./dist'));
});

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', ['js'], function() {
    return browserSync.reload();
});

// use default task to compile JS files
// then launch Browsersync and watch files
gulp.task('default', ['js'], function () {

    // Serve files from the root of our app
    browserSync.init({
        server: {
            baseDir: './app/'
        }
    });

    // when HTML files change, only reload the browsers
    gulp.watch('./app/*.html').on('change', browserSync.reload);
    // when JS files change, compile and then reload browsers
    gulp.watch('./app/src/*.js', ['js-watch']);
});
