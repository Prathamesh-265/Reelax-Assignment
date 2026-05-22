import React from 'react';
import Navbar from './components/layout/Navbar';
import CheckoutPage from './CheckoutPage';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-100 font-sans">
      <Navbar />
      <CheckoutPage />
    </div>
  );
}
