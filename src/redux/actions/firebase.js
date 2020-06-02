import {
  AUTH_USER,
  UNAUTH_USER
} from '../types';

export const authUser = (currentUser) => ({
  type: AUTH_USER,
  payload: currentUser
});

export const unauthUser = () => ({
  type: UNAUTH_USER,
});