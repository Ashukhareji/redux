import React from 'react';
import Books from './Book';
import { render } from '@testing-library/react';

it('should render an empty message when no books', () => {
  const elem = render(<Books />)
  expect(elem).toMatchSnapshot();
});

it('should render a single book', () => {
    const books = ['GK']
    const elem = render(<Books books={books} />)
    expect(elem).toMatchSnapshot();
});
it('should render multiple book', () => {
    const books = ['GK','Political Science',
      'Genreal Science']
    const elem = render(<Books books={books} />)
    expect(elem).toMatchSnapshot();
});