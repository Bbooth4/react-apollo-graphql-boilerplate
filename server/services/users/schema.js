const { gql } = require('apollo-server-express');

module.exports = gql`
  type Attributes {
    id: ID!
    age: String
  }

  type User {
    id: ID!
    name: String
    attributes: Attributes
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }
`;
