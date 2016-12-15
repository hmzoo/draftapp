'use strict';

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _schema = require('./lib/data/schema');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const express = require('express');
const app = express();
const server = require('http').Server(app);
const port = process.env.EXPRESS_PORT || 3000;
const env = process.env.NODE_ENV || 'none';

if (env != 'stack') {
    app.use(express.static(__dirname + '/../dist'));
}

app.use("/GraphQL", (0, _expressGraphql2.default)({
    schema: _schema2.default,
    graphiql: true
}));

server.listen(port);
console.log("Server started, listening on port: " + port + ", env: " + env);
//# sourceMappingURL=index.js.map