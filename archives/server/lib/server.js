
var express = require('express');
var app = express();
var server = require('http').Server(app);
var port = process.env.EXPRESS_PORT || 3001;
var env = process.env.NODE_ENV || 'none';

if (env != 'stack') {
    app.use(express.static(__dirname + '/../dist'));
}

server.listen(port);
console.log("Server started, listening on port: " + port+", env: " + env);

module.exports = server;
