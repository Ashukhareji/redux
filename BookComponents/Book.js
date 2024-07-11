import React from 'react';
import PropTypes from 'prop-types';

 
function Books(props) {
  const { books = [] } = props;

  if (books.length === 1) {
    return <p>{books[0]}</p>;
  }

  if (books.length > 1) {
    return (
      <ol>
        {books.map(book => <li key={book}>{book}</li>)}
      </ol>
    );
  }

  return <span>We didn't find any books.</span>;
}

Books.propTypes = {
    books: PropTypes.array,
};

Books.defaultProps = {
    books: []
};

export default Books;