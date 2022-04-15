import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from "./components/Nav"
import Products from "./components/Products"
import Checkout from "./components/Checkout"
import "./App.css"
import { CartProvider } from './CartContext'

const App = () => {
  return (
    <div className="div App">
      <CartProvider>
        <BrowserRouter>
          <Nav/>
            <Routes>
              <Route path='/' element={<Products/>} />
              <Route path='/checkout' element={<Checkout/>} />
            </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App