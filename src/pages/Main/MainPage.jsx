import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ScrollTop from '../../components/ScrollTop/scroll-top';
import Button from '@material-ui/core/Button';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Menu from '../../components/Menu/Menu';

const MainPage = ({numberOfItems}) => {
  const history = useHistory();

  return (
    <div className="page">
      <Header>
        <Button
          variant="contained"
          color="primary"
          endIcon={
            <Badge color="secondary" badgeContent={numberOfItems}>
              <ShoppingCart />
            </Badge>
          }
          onClick={() => history.push('/cart')}
        >Cart</Button>
      </Header>
      
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

const mapStateToProps = ({cart}) => ({
  numberOfItems: cart.numberOfItems
});

const MainPageConnected = connect(mapStateToProps, {})(MainPage);

export default MainPageConnected;
