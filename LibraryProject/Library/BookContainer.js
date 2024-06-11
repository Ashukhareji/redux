import React from 'react'
import { connect } from 'react-redux';
import { add_Book, borrow_Book } from '../Library';
const BookContainer = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Library</h1>
      <br/>
      <h2 >Number of Books present in library: {props.numberOfBooks}</h2>
      <br/>
      <button className='a.button1' onClick={props.borrow_Book}>Borrow Book</button>
      <br></br>
      <button className='a.button1' onClick={props.add_Book}> Add Book </button>
    </div>
  );
};

const mapStateToProp = state =>{
    return{
        numberOfBooks: state.numberOfBooks,
    };
};

const mapDispatchToProp = dispatch =>{
  return{
    borrow_Book: () =>dispatch(borrow_Book()),
    add_Book: () =>dispatch(add_Book()),
  };
};



export default connect (mapStateToProp,mapDispatchToProp)(BookContainer);
