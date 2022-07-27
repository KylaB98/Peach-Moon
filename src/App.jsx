import React from 'react';
import Home from './Pages/Home';
import Product from './Pages/Product';
import ProductList from './Pages/ProductList';
import Cart from './Pages/Cart';
import ContactForm from './Pages/ContactForm';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AppRouter from './AppRouter';


const App = () => {
  return (
    <ProductList />
  )
}

export default App
