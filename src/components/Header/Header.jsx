import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { unauthUser } from '../../redux/actions/firebase'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

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

const Header = ({currentUser, unauthUser, children}) => {
  const classes = useStyles();
  // const history = useHistory();

  const handleSignOut = () => {
    auth.signOut();
    unauthUser();
  }

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

          {currentUser ? (
            <Button
            variant="contained"
            color="primary"
            endIcon={<ExitToAppIcon />}
            style={{marginRight: '15px'}}
            onClick={handleSignOut}
          >Sign out</Button>   
            ) : (
            <Button
              variant="contained"
              color="primary"
              endIcon={<PersonIcon />}
              style={{marginRight: '15px'}}
              onClick={signInWithGoogle}
            >Sign in with google</Button>
            )}

          {children}

        </Toolbar>
      </div>
    </AppBar>
    </>
  )
};

const mapStateToProps = ({cart, firebase}) => ({
  numberOfItems: cart.numberOfItems,
  currentUser: firebase.currentUser
});

const HeaderConnected = connect(mapStateToProps, {
  unauthUser
})(Header);

export default HeaderConnected;
