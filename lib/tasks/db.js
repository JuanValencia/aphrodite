var MigrationTask = require('migrate-orm2');
var orm = require('orm');
var settings = require("../../etc/settings");
var sprintf = require('sprintf').sprintf;


module.exports.runMigration = function(operation, grunt, done) {
    orm.settings.set("connection.debug", true);
    connString = sprintf("mysql://%s:%s@%s/%s", settings.DATABASE_USER, settings.DATABASE_PASS, settings.DATABASE_HOST, settings.DATABASE_NAME);
    orm.connect(connString, function(err, connection) {
        if (err) throw (err);

        var migrationTask = new MigrationTask(
            connection.driver, {
                dir: 'etc/migrations'
            }
        );
        migrationTask[operation](grunt.option('file'), done);
    });
};
