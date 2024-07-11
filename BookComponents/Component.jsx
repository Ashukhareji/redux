import React, { Component } from 'react';
import Books from './BookComponents/Book';
import './BookComponents/Book.css'

class App extends Component {
  render() {
    const books = [
      'GK',
      'Political Science',
      'Genreal Science'
    ];
    return (
      <div className="App" >
        <Books books={books} />
      </div>
    );
  }
}

export default App;