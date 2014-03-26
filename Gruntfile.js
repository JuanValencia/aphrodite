/*
  npm install grunt-mocha-test --save-dev //this is for nodejs
  npm install grunt-cli 
  npm install mocha
  npm install grunt
  npm install blanket
  npm install istanbul
  npm install grunt-mocha-istanbul
 */
module.exports = function(grunt) {

    grunt.initConfig({
        /*
        when we have html/js tests, they should go here        
        mocha: {
            test: {
                options: {
                    reporter: 'XUnit'
                },
                src: ['./src/tests/*.html'],
                dest: './build/output/xunit.out',
            },
        },*/
        mochaTest: {
            test: {
                options: {
                    reporter: 'nyan'
                },
                src: ['test/**/*.js']
            }
        },
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
                    reportFormats: ['lcovonly']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-mocha-istanbul');

    grunt.registerTask('coveralls', ['mocha_istanbul:coveralls']);
    grunt.registerTask('default', ['mocha_istanbul']);
};