import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Router/Layout'
import Home from './Router/Home'
import Blog from './Router/Blog'
import Contact from './Router/Contact'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App