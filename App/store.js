import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../CounterProject/counter/counterSlice'
import userReducer from '../LoginFormProject/LoginForm/userSlice'
import customerReducer from '../OrderProject/slice'
import bookReducer from '../LibraryProject/Library/bookreducer'
import todoReducer from '../ApiProject/FetchApi/todoSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,

    user: userReducer,

    customer: customerReducer,

    book: bookReducer,

    todo: todoReducer,

  },
})