var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var fs = require('fs');

var Config = require("./Config/config.js");
var cors = require('cors');


var app = express();

// var secrets = {
// 	user: 'pbtDance',
// 	pass: 'pbtDance@2017##@',
// 	mongolocal: {
// 		user: 'pbtDance',
// 		pass: 'pbtDance@2017##@'
// 	},
// 	mongostaging: {
// 		user: 'pbt',
// 		pass: 'pbt@2017##@'
// 	},
// };


// mongoose.connect('mongodb://52.34.207.5:27017/pbtDance', secrets.mongolocal);
// mongoose.connect('mongodb://52.34.207.5:27017/pbt', secrets.mongostagin);
// mongoose.connect('mongodb://localhost:27017/pbt', secrets.mongostaging);
mongoose.connect(Config.DBhost, Config.DBSecrets);

var db = mongoose.connection;
db.on('error', console.error.bind(console, "connection failed"));
db.once('open', function () {
	console.log("Database conencted successfully!");
	console.log("process.env==>", process.env.NODE_ENV);
});
// mongoose.set('debug', true);
app.get('/monitoring', function (req, res) {
	var timeInMss = new Date().getTime()

	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.send(JSON.stringify(timeInMss));
  });

app.use(cors());
// app.use(express.static(__dirname + '../ng/dis
app.use(express.static(path.join(__dirname, '/dist/frontend')));
// app.use(express.static(path.join(__dirname, '../frontend/dist')));

// view engine setup
app.engine('html', function (path, opt, fn) {
	fs.readFile(path, 'utf-8', function (error, str) {
		if (error) return str;
		return fn(null, str);
	});
});
app.set('views', path.join(__dirname, '/dist/frontend'));
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
	extended: true,
	limit: '100mb'
}));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/api', require('./Routers/test_routes.js'));
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
	next();
});

/**
 * Module dependencies.
 */

var debug = require('debug')('node-rest:server');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort('5105');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);
var socket = require('socket.io')(server);


/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, console.log("PBTTS Running on", port));
server.on('error', onError);
server.on('listening', onListening);
require('./Routers/router')(express, app, socket);

// app.use('/', appRoutes);


// catch 404 and forward to error handler
// app.use(function (req, res, next) {
// 	return res.render('index');
// });

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
	var port = parseInt(val, 10);

	if (isNaN(port)) {
		// named pipe
		return val;
	}

	if (port >= 0) {
		// port number
		return port;
	}

	return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
	if (error.syscall !== 'listen') {
		throw error;
	}

	var bind = typeof port === 'string' ?
		'Pipe ' + port :
		'Port ' + port;

	// handle specific listen errors with friendly messages
	switch (error.code) {
		case 'EACCES':
			console.error(bind + ' requires elevated privileges');
			process.exit(1);
			break;
		case 'EADDRINUSE':
			console.error(bind + ' is already in use');
			process.exit(1);
			break;
		default:
			throw error;
	}
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
	var addr = server.address();
	var bind = typeof addr === 'string' ?
		'pipe ' + addr :
		'port ' + addr.port;
	debug('Listening on ' + bind);
}