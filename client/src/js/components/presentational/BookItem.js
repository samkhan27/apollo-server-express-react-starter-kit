import React from 'react';

const Book = ({
  title,
  author
}) => (
  <div>
    <p>
      {title}: {author}
    </p>
  </div>
);

export default Book;