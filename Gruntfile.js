/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        uglify: {
            options: {
                compress: true,
                mangle: true,
                preserveComments: 'some',
                report: 'gzip'
            },
            build: {
                src: 'jquery.wheel.js',
                dest: 'jquery.wheel.min.js'
            }
        }
    });

    // Load the plugin that provides the 'uglify' task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
};