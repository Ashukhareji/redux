import { createStore } from "redux";
import bookReducer from './bookreducer';

const store = createStore(bookReducer);

export default store;