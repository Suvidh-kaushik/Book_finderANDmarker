import React from 'react'
import Book from './compnents/Book'
import {Search} from './pages/Search'
import Bookshelf from './pages/Bookshelf'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Search/>}/>
    <Route path="/shelf" element={<Bookshelf/>}/>
  </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App
