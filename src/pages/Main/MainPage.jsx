import React from 'react';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ScrollTop from '../../components/ScrollTop/scroll-top';
import Menu from '../../components/Menu/Menu';

const MainPage = () => (
  <>
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
  </>
);

export default MainPage;
