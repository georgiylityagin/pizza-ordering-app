import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Menu from '../../components/Menu/Menu';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ScrollTop from '../../components/ScrollTop/scroll-top';

const MainPage = () => {
  return (
    <div className="page">
      <Header />
      <div className="mainContent">
        <div className="container">
          <Menu />
        </div>
      </div>

      <ScrollTop>
        <Fab color="primary" size="medium" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>

      <Footer />
    </div>
  )
}

export default MainPage;
