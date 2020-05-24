import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { DisplayUsers } from './users';
import client from './apollo';

const App = () => (
  <ApolloProvider client={client}>
    <DisplayUsers />
  </ApolloProvider>
);

export default App;
