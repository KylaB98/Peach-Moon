import React from 'react';
import Home from './Pages/Home';
import Product from './Pages/Product';
import ProductList from './Pages/ProductList';
import Cart from './Pages/Cart';
import ContactForm from './Pages/ContactForm';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
/* import AppRouter from './AppRouter'; */


const App = () => {
  return (
    <div>
      <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/contact" element={<ContactForm />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </Router>
    </div>
  )
}

export default App
