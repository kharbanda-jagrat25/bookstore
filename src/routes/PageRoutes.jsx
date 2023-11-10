import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Books from '../pages/Books/Books';
import Authors from '../pages/Authors/Authors';
import BookDetails from '../pages/BookDetails/BookDetails';
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart';

export default function PageRoutes() {
    return (
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/authors" element={<Authors />} />
            <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
    );
}
