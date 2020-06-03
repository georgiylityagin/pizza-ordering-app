import {
  AUTH_USER,
  UNAUTH_USER,
  FETCH_HISTORY
} from '../types';

const initialState = {
  currentUser: undefined,
  history: null
};


const firebaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    case UNAUTH_USER:
      return {
        ...state,
        currentUser: null
      }
    case FETCH_HISTORY:
      return {
        ...state,
        history: action.payload
      }
    default:
      return state;
  }
};

export default firebaseReducer;