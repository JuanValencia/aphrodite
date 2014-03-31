module.exports = function(db, cb) {
    db.define('projects', {
        name: String,
        url: String,
        coverage_url: String
    });
};