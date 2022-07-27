import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Pages/Home';
import ProductList from './Pages/ProductList';
import ContactForm from './Pages/ContactForm';
import Cart from './Pages/Cart';

function AppRouter() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/contact" element={<ContactForm />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;