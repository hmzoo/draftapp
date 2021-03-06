const express = require('express');
const app = express();
const server = require('http').Server(app);
const port = process.env.EXPRESS_PORT || 3000;
const env = process.env.NODE_ENV || 'none';

import GraphQLHTTP from 'express-graphql';
import schema from './lib/data/schema';

if (env != 'stack') {
    app.use(express.static(__dirname + '/../dist'));
}

app.use("/GraphQL", GraphQLHTTP({
    schema,
    graphiql: true
  })
);

server.listen(port);
console.log("Server started, listening on port: " + port+", env: " + env);
