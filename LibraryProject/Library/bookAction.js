import { BORROW_BOOK } from './booktype';
import { ADD_BOOK } from './booktype';

export const borrow_Book = () =>{
    return{
        type: BORROW_BOOK,
    };
};
export const add_Book = () =>{
    return{
        type: ADD_BOOK,
    };
};
