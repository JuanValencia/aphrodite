orm = require("../models/orm");

module.exports.controller = function(app) {
    app.get('/dashboard/coverage-reports', function(req, res) {
        orm(function(db) {
            db.models.projects.all(function(err, projects) {
                res.render('coverage-reports', {
                    projects: projects
                });
            });
        });
    });
};