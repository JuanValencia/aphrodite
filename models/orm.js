var orm = require("orm");
var settings = require("../etc/settings");
sprintf = require('sprintf').sprintf;

var _db = null;
module.exports = function(cb) {
    if (_db === null) {
        connString = sprintf("mysql://%s:%s@%s/%s", settings.DATABASE_USER, settings.DATABASE_PASS, settings.DATABASE_HOST, settings.DATABASE_NAME);
        _db = orm.connect(connString, function(err, db) {
            if (err) throw err;
            _db = db;
            //load all the other models
            _db.load("./projects", function(err) {
                if (err) throw err;
            });
            cb(_db);
        });
    } else {
        cb(_db);
    }
};