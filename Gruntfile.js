module.exports = function(grunt) {

    grunt.initConfig({
        mocha_istanbul: {
            coveralls: {
                src: 'tests', // the folder, not the files
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

    grunt.registerTask('migrate:generate', '', function() {
        var done = this.async();
        require('./lib/tasks/db').runMigration('generate', grunt, done);
    });

    grunt.registerTask('migrate:up', '', function() {
        var done = this.async();
        require('./lib/tasks/db').runMigration('up', grunt, done);
    });

    grunt.registerTask('migrate:down', '', function() {
        var done = this.async();
        require('./lib/tasks/db').runMigration('down', grunt, done);
    });
    grunt.registerTask('coverage', ['mocha_istanbul:coveralls']);
    grunt.registerTask('default', ['mocha_istanbul']);
};