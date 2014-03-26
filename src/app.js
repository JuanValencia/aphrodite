// Import Generic Modules
var fs = require('fs');
var http = require('http');
var express = require('express'); // npm install express
var mysql = require('mysql'); // npm install mysql
var ejs = require('ejs'); // npm install ejs

// Import Custom Modules
var example = require('./module/example.module.js');

var app = express();
app.use(express.bodyParser());
app.use(app.router);

var projectName = "Aphrodite";

// MySQL Configuration
var client = mysql.createConnection({
	user: 'USERNAME',
	password: 'PASSWORD',
	host: 'HOST',
	port: '3306',
	database: 'DB'
});

/**
 * Router
 */
// Get
app.get('/version', function (request, response) { 
	response.send("Project : " + projectName);
});

// How to use custom module
app.get('/area/:radius', function (request, response) { 
	var radius = request.param('radius');
	response.send("Area is " + example.circleArea(radius));
});

app.get('/user/:id', function (request, response) { 
	// Get Parameter and shows
	response.send("User : " + request.param('id'));
});

// Post
app.post('/user', function (request, response) { 
	// Get Parameters
	var login = request.param('login');
	var password = request.param('password');
	
	// Do the work
	
	response.send("SUCESS");
});

app.put('/user/:id', function (request, response) { });
app.del('/user/:id', function (request, response) { });

//**************************MYSQL********************************

// Fetch the records fromMySQL
app.get('/', function (request, response) { 
	fs.readFile('./view/list.html', 'utf8', function (error, data) {
		client.query('SELECT * FROM products', function( error, results) {
			response.send(ejs.render(data, {
				data: results
			}));
		});
	});
});

// Insert Template
app.get('/insert', function (request, response) {
	fs.readFile('./view/insert.html', 'utf8', function(error, data) {
		response.send(data);
	});
});

// Edit Template
app.get('/edit/:id', function (request, response) {
	fs.readFile('./view/edit.html', 'utf8', function (error, data) {
		client.query('SELECT * FROM products WHERE id = ?', [request.param('id')], function(error, result) {
			response.send(ejs.render(data, {data: result[0]}));
		});
	});
});

// Delete the record from MySQL
app.get('/delete/:id', function (request, response) {
	client.query('DELETE FROM products WHERE id=?', [request.param('id')], function() {
		response.redirect('/');
	});
});

// Insert the record from MySQL
app.post('/insert', function (request, response) {
	var body = request.body;	
	client.query('INSERT INTO products (name, modelnumber, series) VALUES (?, ?, ?)', [body.name, body.modelnumber, body.series], function() {
	response.redirect('/');
	});
});

// Edit the record from MySQL  
app.post('/edit/:id', function (request, response) {
	var body = request.body;
	client.query('UPDATE products SET name=?, modelnumber=?, series=? WHERE id=?', [body.name, body.modelnumber, body.series, request.param('id')], function () {
		response.redirect('/');
	});
});

// Server Start
http.createServer(app).listen(52273, function () {
    console.log('Server running at http://127.0.0.1:52273');
});
