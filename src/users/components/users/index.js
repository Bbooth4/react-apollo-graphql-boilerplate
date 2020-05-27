import React from 'react';
import gql from 'graphql-tag';
import { map, prop, path, pathOr, applySpec } from 'ramda';
import { useQuery } from '@apollo/react-hooks';

const GET_USERS = gql`
  query getUsers {
    users {
      id
      name
      attributes {
        age
      }
    }
  }
`;

const formatData = applySpec({
  users: pathOr([], ['data', 'users'])
});

export const Users = () => {
  const getUsers = useQuery(GET_USERS);
  const { users } = formatData(getUsers);
  return (
    <div>
      <h1>Display Users</h1>
      {map(user => (
        <div key={prop('name', user)}>
          <div>Name: {prop('name', user)}</div>
          <div>Age: {path(['attributes', 'age'], user)}</div>
        </div>
      ))(users)}
    </div>
  );
}

export default Users;
