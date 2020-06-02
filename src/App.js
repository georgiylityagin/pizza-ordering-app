import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './pages/Main/MainPage';
import CartPage from './pages/Cart/CartPage';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { authUser } from './redux/actions/firebase';
import { auth } from './firebase/firebase.utils';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e64a19',
    },
    secondary: {
      main: '#455a64',
    },
  },
});

function App({authUser}) {

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      authUser(user);
    });

    return () => {
      unsubscribeFromAuth();
    }
  }, [authUser]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path='/' exact component={MainPage}/>
          <Route path='/cart' component={CartPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

const AppConnected = connect(null, {authUser})(App);

export default AppConnected;
