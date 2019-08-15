import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import BookItem from '../presentational/BookItem'

const Books = () => {
  const { loading, error, data } = useQuery(gql`
    {
      books {
        title
        author
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.books.map(({ title, author }) => (
    <BookItem key={title} title={title} author={author} />
  ));
};

export default Books;