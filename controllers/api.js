
module.exports.controller = function(app) {
  app.get('/api/projects', function(req, res) {
      // any logic goes here
     res.render('index', { title: 'The index page!' });
  });
};
