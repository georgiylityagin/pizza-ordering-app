import {
  AUTH_USER,
  UNAUTH_USER
} from '../types';

const initialState = {
  currentUser: null
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
    default:
      return state;
  }
};

export default firebaseReducer;