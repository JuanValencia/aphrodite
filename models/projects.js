module.exports = function(db, cb) {
    db.define('projects', {
        name: String
    });
};