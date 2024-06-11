import React from 'react'
import BookContainer from './LibraryProject/Library/BookContainer'
import './LibraryProject/Library/library.css'
import { Provider } from 'react-redux'
import store from './LibraryProject/Library/store'
const App = () => {

  return (
    <div>
      <Provider store={store}>
        <BookContainer />
      </Provider>
    </div>
  )
}

export default App
