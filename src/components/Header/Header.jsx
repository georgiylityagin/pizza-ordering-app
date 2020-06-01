import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import './Header.scss';

const useStyles = makeStyles(() => ({
  header: {
    marginBottom: '20px'
  },
  title: {
    flexGrow: 1,
    fontWeight: 700,
    fontSize: 26
  },
}));

const Header = ({numberOfItems}) => {
  const classes = useStyles();

  return (
    <>
    <div id="back-to-top-anchor" />
    <AppBar position="sticky" className={classes.header}>
      <div className="container">
        <Toolbar>
          <div className="header-brand">
            <NavLink to="/">
              <img 
                className="header-brand__icon"
                src="./logo.svg"
                alt="brand-logo"
                width="42px"
              />
            </NavLink>

              <NavLink to="/" className="header-brand__title">
                CALL <span>OF</span> PIZZA
              </NavLink>
  
          </div>

          <Button
            variant="contained"
            color="primary"
            endIcon={<PersonIcon />}
            style={{marginRight: '15px'}}
          >Sign in</Button>

          <Button
            variant="contained"
            color="primary"
            endIcon={
              <Badge color="secondary" badgeContent={numberOfItems}>
                <ShoppingCart />
              </Badge>
            }
          >Cart</Button>
        </Toolbar>
      </div>
    </AppBar>
    </>
  )
};

const mapStateToProps = ({cart}) => ({
  numberOfItems: cart.numberOfItems
});

const HeaderConnected = connect(mapStateToProps, {})(Header);

export default HeaderConnected;
