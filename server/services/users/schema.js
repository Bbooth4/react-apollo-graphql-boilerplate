const { gql } = require('apollo-server-express');

module.exports = gql`
  type User {
    id: String
    name: String
  }

  type Query {
    users: [User]
  }
`;
