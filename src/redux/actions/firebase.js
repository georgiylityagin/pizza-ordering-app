import {
  AUTH_USER,
  UNAUTH_USER,
  SUBMIT_ORDER,
  FETCH_HISTORY
} from '../types';

import {firestore} from '../../firebase/firebase.utils';

export const authUser = (currentUser) => ({
  type: AUTH_USER,
  payload: currentUser
});

export const unauthUser = () => ({
  type: UNAUTH_USER,
});

export const submitOrderUnauth = () => ({
  type: SUBMIT_ORDER
});

export const submitOrder = ({userAuth, items, totalPrice, contacts}) => (dispatch) => {
  const date = new Date().toLocaleString();

  firestore.doc(`users/${userAuth.id}`)
    .collection('orders')
    .add({items, date, totalPrice, contacts})
    .then(() => {
      dispatch({type: SUBMIT_ORDER});
    })
    .catch(error => {
      console.log('error placing order: ', error.message);
    })
};

export const fetchHistory = (userAuth) => (dispatch) => {
  firestore.doc(`users/${userAuth.id}`)
    .collection('orders').get()
    .then((querySnapshot) => {
      const history = [];

      querySnapshot.forEach(doc => {
        const {date, items, totalPrice, contacts} = doc.data();

        history.push({
          id: doc.id,
          date,
          items,
          totalPrice,
          contacts
        });
      })

      console.log(history);

      dispatch({type: FETCH_HISTORY, payload: history})
    })
    .catch(error => {
      console.log('error fetching history: ', error.message);
    })
};