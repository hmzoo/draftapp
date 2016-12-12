import express from 'express';
import GraphQLHTTP from 'express-graphql';
import schema from './lib/data/schema';

const app = express();
const PORT = process.env.EXPRESS_PORT || 3000;

app.listen(PORT, () => {
    console.log("Server started, listening on port: " + port);
});
