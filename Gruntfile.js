module.exports = function(grunt) {

    grunt.initConfig({
        mocha_istanbul: {
            coveralls: {
                src: 'test', // the folder, not the files
                options: {
                    coverage: true,
                    check: {
                        lines: 50,
                        statements: 50,
                    },
                    root: './src', // define where the cover task should consider the root of libraries that are covered by tests
                    reportFormats: ['html']
                }
            }
        },
        nodemon: {
            dev: {
                script: 'app.js',
            },
        }
    });
    grunt.loadNpmTasks('grunt-mocha-istanbul');
    grunt.loadNpmTasks('grunt-nodemon');

    grunt.registerTask('coveralls', ['mocha_istanbul:coveralls']);
    grunt.registerTask('default', ['mocha_istanbul']);
};