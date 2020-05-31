import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Menu from '../../components/Menu/Menu';

const MainPage = () => {
  return (
    <div className="page">
      <Header />
      <div className="mainContent">
        <div className="container">
          <Menu />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MainPage;
