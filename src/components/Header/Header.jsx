import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import './Header.scss';

const useStyles = makeStyles((theme) => ({
  header: {
    marginBottom: '20px'
  },
  title: {
    flexGrow: 1,
    fontWeight: 700,
    fontSize: 26
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.header}>
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
            endIcon={<ShoppingCart />}
          >Cart</Button>
        </Toolbar>
      </div>
    </AppBar>
  )
};

export default Header;
