'use strict';

let gulp        = require('gulp'),
    del         = require('del'),
    browserSync = require('browser-sync').create(),
    babel       = require('gulp-babel'),
    concat      = require('gulp-concat'),
    sourcemaps  = require('gulp-sourcemaps');

const BASE_PATH = './app';

// process JS files and return the stream
gulp.task('jsSrc', ['clean'], () => {
    // return the stream
    return gulp
        // read source files
        .src([
            `${BASE_PATH}/src/app.pubsub.js`,
            `${BASE_PATH}/src/app.*.js`,
            `${BASE_PATH}/src/app.js`
        ])
        // start sourcemaps
        .pipe(sourcemaps.init())
        // transpile using Babel to ES5
        .pipe(babel({ presets: ['es2015'] }).on('error', handleError))
        // concatenate all source files into a single file
        .pipe(concat('bundle.js'))
        // output sourcemaps
        .pipe(sourcemaps.write('maps/'))    
        // output stream, containing
        .pipe(gulp.dest(`${BASE_PATH}/dist`));
});

// process JS vendor files
gulp.task('jsVendor', ['clean'], () => {
    return gulp
        .src([
            `${BASE_PATH}/vendor/jquery*.js`,
            `${BASE_PATH}/vendor/*.js`,
        ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(`${BASE_PATH}/dist`));
});

// create a task that ensures the `js` task is complete
// before reloading browsers
gulp.task('jsWatch', ['jsVendor', 'jsSrc'], () => {
    return browserSync.reload();
});

gulp.task('clean', () => {
    return del([`${BASE_PATH}/dist`]);
});

// use default task to compile JS files
// then launch Browsersync and watch files
gulp.task('default', ['jsVendor', 'jsSrc'], () => {

    // Serve files from the root of our app
    browserSync.init({
        server: {
            baseDir: BASE_PATH
        }
    });

    // when HTML files change, only reload the browsers
    gulp.watch(`${BASE_PATH}/*.html`).on('change', browserSync.reload);
    // when JS files change, compile and then reload browsers
    gulp.watch(`${BASE_PATH}/src/*.js`, ['jsWatch']);
});

function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}
