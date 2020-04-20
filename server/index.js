const express = require('express');
const { mergeSchemas } = require('graphql-tools');
const { ApolloServer } = require('apollo-server-express');
const { docs, users } = require('./services');

const schema = mergeSchemas({ schemas: [users, docs] });

const server = new ApolloServer({
  schema,
  playground: true,
  introspection: true
});

const app = express();

server.applyMiddleware({ app });

app.listen(4000);
