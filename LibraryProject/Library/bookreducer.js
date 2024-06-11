import {BORROW_BOOK, ADD_BOOK} from './booktype';

const initialState = {
    numberOfBooks : 500
}

const bookReducer=(state = initialState, action) =>{
    switch(action.type){
        case BORROW_BOOK: return{
          ...state,
          numberOfBooks: state.numberOfBooks - 1,
        }
        case ADD_BOOK: return{
            ...state,
            numberOfBooks:state.numberOfBooks + 1,
        }
        default:
        return state
    }
    
}
export default bookReducer;