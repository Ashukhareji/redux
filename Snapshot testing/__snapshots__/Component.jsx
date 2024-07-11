import React from 'react'
import Product from './Snapshot testing/Product'
const App = () => {
  const listOfitems= ["Rice","Pulses","Wheat"]
  return (
    <div>
      <Product items={listOfitems}/>
    </div>
  )
}

export default App