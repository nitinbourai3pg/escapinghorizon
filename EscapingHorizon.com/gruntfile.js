/// <binding BeforeBuild='all' />
/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    grunt.initConfig({
        clean:["Scripts/Combined/*"],
        concat: {
            all: {
                src: ['Scripts/App/*'],
                dest: 'Scripts/Combined/combined.js'
            }
        },
        jshint: {
            files: ['Scripts/App/*.js'],
            options: {
                '-W069': false,
            }
        },
        uglify: {
            all: {
                src: ['Scripts/Combined/combined.js'],
                dest: 'Scripts/Combined/combined.min.js'
            }
        },
    });
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask("all", ['clean', 'concat', 'jshint', 'uglify']);
};