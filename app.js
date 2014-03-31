// Import Generic Modules
var fs = require('fs');
var http = require('http');
var express = require('express'); // npm install express
var mysql = require('mysql'); // npm install mysql
var ejs = require('ejs'); // npm install ejs

// Import Custom Modules
var example = require('./lib/example.module.js');

var app = express();
app.use(express.bodyParser());
app.use(app.router);
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
    response.render('index', { title: 'The index page!' });
});

// dynamically include routes (Controller)
fs.readdirSync('./controllers').forEach(function (file) {
  if(file.substr(-3) == '.js') {
      route = require('./controllers/' + file);
      route.controller(app);
  }
});

// Server Start
http.createServer(app).listen(52273, function () {
    console.log('Server running at http://127.0.0.1:52273');
});
