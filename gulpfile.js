let webdriver = require('gulp-webdriver')
let gulp = require('gulp');

process.env.URL = 'https://www.google.dk'
gulp.task('test', function() {
    return gulp.src('wdio.conf.js').pipe(webdriver({
        logLevel: 'verbose',
        waitforTimeout: 10000,
        baseUrl: process.env.URL
    }));
});
