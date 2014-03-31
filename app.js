// Import Generic Modules
var fs = require('fs');
var http = require('http');
var express = require('express'); // npm install express
var mysql = require('mysql'); // npm install mysql
var ejs = require('ejs'); // npm install ejs
var dropSlash = require('./lib/dropslash.js');

var server = http.createServer(app);

var socketio = require('socket.io').listen(server);
socketio.sockets.on('connection', require('./controllers/socket'));

var app = express();
app.use(express.bodyParser());
app.use(dropSlash);
app.use(app.router);
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
    response.render('index', { title: 'The index page!' });
});


// dynamically include routes (Controller)
fs.readdirSync('./controllers').forEach(function (file) {
  if(file.substr(-3) == '.js' && file != "socket.js") {
      route = require('./controllers/' + file);
      route.controller(app);
  }
});

// Server Start
server.listen(52273, function () {
    console.log('Aphrodite is running at http://127.0.0.1:52273');
});
