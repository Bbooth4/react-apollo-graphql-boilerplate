const { gql } = require('apollo-server-express');

module.exports = gql`
  type Doc {
    id: String
    field: String
  }

  type Query {
    docs: [Doc]
  }
`;
