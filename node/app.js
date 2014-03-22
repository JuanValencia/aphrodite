// Import Modules
var fs = require('fs');
var http = require('http');
var express = require('express');

var app = express();

app.use(express.bodyParser());
app.use(app.router);

// Router
app.get('/', function (request, response) { 
	response.end("hello");
});
app.get('/user', function (request, response) { });
app.get('/user/:id', function (request, response) { });
app.post('/user', function (request, response) { });
app.put('/user/:id', function (request, response) { });
app.del('/user/:id', function (request, response) { });

http.createServer(app).listen(52273, function () {
    console.log('Server running at http://127.0.0.1:52273');
});
