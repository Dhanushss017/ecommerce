import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home'
import Categories from './component/Categories'
import Details from './component/Details';
import Products from './component/Products';
const App = () => {
  return (
    <BrowserRouter>
    
    <Routes>

      <Route path="/" exact element={<Home/>} />
      <Route path="/categories" exact element={<Categories/>} />
      <Route path="/categories-details" exact element={<Details/>} />
      <Route path="/products" exact element={<Products/>} />
     
   
  </Routes>
  </BrowserRouter>
  )
}

export default App
