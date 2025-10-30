import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './Homepage';
import AboutUs from './AboutUs';
import Contacts from './Contacts';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';


export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f9f8f3]">
        <Navbar />
        <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage />} />

          {/* Products and Product Details */}
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />

          {/* Contacts and About */}
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}
