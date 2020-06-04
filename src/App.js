import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './pages/Main/MainPage';
import CartPage from './pages/Cart/CartPage';
import HistoryPage from './pages/History/HistoryPage';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { authUser } from './redux/actions/firebase';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { items } from './menu-items-list.json';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e64a19'
    },
    secondary: {
      main: '#455a64'
    },
    accent: {
      main: '#fff'
    }
  }
});

function App({ authUser }) {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(
      async (userAuthInfo) => {
        if (userAuthInfo) {
          const userRef = await createUserProfileDocument(userAuthInfo);

          userRef.onSnapshot((snapShot) => {
            authUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
        }

        authUser(userAuthInfo);
      }
    );

    return () => {
      unsubscribeFromAuth();
    };
  }, [authUser]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className='page'>
          <Header />
          <Switch>
            <Route path='/' exact>
              <MainPage items={items} />
            </Route>
            <Route path='/cart' component={CartPage} />
            <Route path='/history' component={HistoryPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

const AppConnected = connect(null, { authUser })(App);

export default AppConnected;
