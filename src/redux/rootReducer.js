import { combineReducers } from 'redux';
import cart from './reducers/cart';
import firebase from './reducers/firebase';

const rootReducer = combineReducers({
  cart,
  firebase
});

export default rootReducer;