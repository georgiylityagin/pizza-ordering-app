import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';

const CartPage = () => {
  return (
    <div className="page">
      <Header />

      <div className="mainContent">
        <div className="container">
          <ShoppingCart />
        </div>
      </div>
      
      <Footer />
    </div>
  )
};

export default CartPage;
