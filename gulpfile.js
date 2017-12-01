let webdriver = require('gulp-webdriver')
let gulp = require('gulp');

gulp.task('test', function() {
    return gulp.src('wdio.conf.js').pipe(webdriver({
        logLevel: 'verbose',
        waitforTimeout: 10000
    }));
});
