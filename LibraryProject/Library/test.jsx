import React from 'react'
import BookContainer from '../src/features/Library/BookContainer'
import '../src/features/Library/library.css'
import { Provider } from 'react-redux'
import store from '../src/features/Library/store'
const test = () => {
 
  return (
    <div>
<Provider store={store}>       
   <BookContainer/>
</Provider>
    </div>
  )
}

export default test
