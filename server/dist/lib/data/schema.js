"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require("graphql");

const query = new _graphql.GraphQLObjectType({
    name: "Query",
    description: "First GraphQL Server Config — Yay !",
    fields: () => ({
        hello: {
            type: _graphql.GraphQLString,
            description: "Accepts a name so you can be nice and say hi",
            args: {
                name: {
                    type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
                    description: "Name you want to say hi to:) "
                }
            },
            resolve: (_, args) => {
                return `Hello, ${ args.name }!!!`;
            }
        },
        luckyNumber: {
            type: _graphql.GraphQLInt,
            description: "A lucky number",
            resolve: () => {
                return 888;
            }
        } }) });

const schema = new _graphql.GraphQLSchema({ query });

exports.default = schema;
//# sourceMappingURL=schema.js.map