orm = require("../models/orm");

module.exports.controller = function(app) {
    app.get('/dashboard/coverage-reports', function(req, res) {
        orm(function(db) {
            all = db.models.projects.all();
            res.render('coverage-reports', {
                title: 'The index page!'
            });
        });
    });
};