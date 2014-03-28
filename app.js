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

var projectName = "Aphrodite";

/**
 * Router
 */
// Get
app.get('/version', function (request, response) {
	response.send("Project : " + projectName);
});


app.get('/', function (request, response) {
    response.render('index', { title: 'The index page!' });
});

// How to use custom module
app.get('/area/:radius', function (request, response) {
	var radius = request.param('radius');
	response.send("Area is " + example.circleArea(radius));
});

// Server Start
http.createServer(app).listen(52273, function () {
    console.log('Server running at http://127.0.0.1:52273');
});
