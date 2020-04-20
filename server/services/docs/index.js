const schema = require('./schema');
const resolvers = require('./resolvers');
const { makeExecutableSchema } = require('graphql-tools');

module.exports = makeExecutableSchema({
  resolvers,
  typeDefs: schema
});
