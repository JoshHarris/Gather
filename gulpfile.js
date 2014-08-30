
// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish');

// Other variables
var jsHintPaths = [
    'gulpfile.js',
    'server.js',
    'app/**/*.js',
    'server/**/*.js',
    'test/**/*.js'
];

gulp.task('default', ['jshint'], function (){
    gulp.watch(jsHintPaths, ['jshint']);
});

gulp.task('jshint', function (){
    return gulp.src(jsHintPaths)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});