import { compose } from 'ramda';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_USERS = gql`
  query getUsers {
    users {
      id
      name
    }
  }
`;

const getUsers = () => {
  try {
    const res = useQuery(GET_USERS);
    console.log(res);
    return res;
  } catch(err) {
    console.log(err);
  }
};

export default compose(
  // getUsers
  res => res
);
