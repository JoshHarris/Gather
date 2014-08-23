/**
 * Validate files with JSHint.
 *
 * ---------------------------------------------------------------
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-jshint
 *
 */
module.exports = function(grunt) {

    grunt.config.set('jshint', {
        options: {
            curly: true,
            eqeqeq: true,
            eqnull: true,
            browser: true,
            es3: true,
            globals: {
                jQuery: true
            }
        },
        files: ['Gruntfile.js', 'tasks/**/*.js', 'lib/**/*.js', 'test/**/*.js']
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
};