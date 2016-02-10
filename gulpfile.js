'use strict';

let gulp        = require('gulp'),
    del         = require('del'),
    browserSync = require('browser-sync').create(),
    babel       = require('gulp-babel'),
    concat      = require('gulp-concat'),
    sourcemaps  = require('gulp-sourcemaps');

const BASE_PATH = './app';

// process JS files and return the stream
gulp.task('js', ['clean'], () => {
    // return the stream
    return gulp
        // read source files
        .src(`${BASE_PATH}/src/*.js`)
        // start sourcemaps
        .pipe(sourcemaps.init())
        // transpile using Babel to ES5
        .pipe(babel({
            presets: ['es2015']
        }))
        // concatenate all source files into a single file
        .pipe(concat('bundle.js'))
        // output sourcemaps
        .pipe(sourcemaps.write('maps/'))    
        // output stream, containing
        .pipe(gulp.dest(`${BASE_PATH}/dist`));
});

// create a task that ensures the `js` task is complete
// before reloading browsers
gulp.task('js-watch', ['js'], () => {
    return browserSync.reload();
});

gulp.task('clean', () => {
    return del([`${BASE_PATH}/dist`]);
});

// use default task to compile JS files
// then launch Browsersync and watch files
gulp.task('default', ['js'], () => {

    // Serve files from the root of our app
    browserSync.init({
        server: {
            baseDir: BASE_PATH
        }
    });

    // when HTML files change, only reload the browsers
    gulp.watch(`${BASE_PATH}/*.html`).on('change', browserSync.reload);
    // when JS files change, compile and then reload browsers
    gulp.watch(`${BASE_PATH}/src/*.js`, ['js-watch']);
});
