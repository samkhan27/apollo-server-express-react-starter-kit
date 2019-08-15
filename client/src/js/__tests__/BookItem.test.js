import React from 'react';
import BookItem from '../components/presentational/BookItem';
import { create, act } from 'react-test-renderer';

test('It loads the book item component with title and author', () => {
  let component;
  act(() => {
    component = create(
      <BookItem title="Game of Thrones" author="George RR Martin" />
    );
  });

  expect(component.toJSON()).toMatchSnapshot();
});