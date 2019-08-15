import React from 'react';
import Books from '../components/container/Books';
import { create, act } from 'react-test-renderer';
import { ApolloProvider } from '@apollo/react-hooks';
import client from '../services/graphql/apolloClient';

test('It loads the book component', () => {
  let component;
  act(() => {
    component = create(
      <ApolloProvider client={client}>
        <Books />
      </ApolloProvider>
    );
  });

  expect(component.toJSON()).toMatchSnapshot();
});
