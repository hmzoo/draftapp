var express = require('express');
var app = express();
var server = require('http').Server(app);
var port = process.env.EXPRESS_PORT || 3000;
var env = process.env.NODE_ENV || 'none';



server.listen(port);
console.log("Server started, listening on port: " + port+", env: " + env);
