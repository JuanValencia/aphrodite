var orm = require("orm");

var _db = null;
module.exports = function(cb) {
    if (_db === null) {
        _db = orm.connect("mysql://aphrodev:@phrod3v@localhost/aphrodite", function(err, db) {
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