import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { Users } from './users';
import client from './apollo';

const App = () => (
  <ApolloProvider client={client}>
    <Users />
  </ApolloProvider>
);

export default App;
