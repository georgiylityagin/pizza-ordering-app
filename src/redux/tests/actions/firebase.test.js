import { AUTH_USER, UNAUTH_USER, SUBMIT_ORDER } from '../../types';

import {
  authUser,
  unauthUser,
  submitOrderUnauth,
} from '../../actions/firebase';

describe('Redux: firebase actions:', () => {

  test('shoul create an action to authorize user', () => {
    const currentUser = {
      name: 'anon',
      email: 'anon@gmail.com',
    };

    expect(authUser(currentUser)).toEqual({
      type: AUTH_USER, payload: currentUser
    })
  });

  test('shoul create an action to unauthorize user', () => {
    expect(unauthUser()).toEqual({
      type: UNAUTH_USER
    })
  });

  test('shoul create an action to place the order', () => {
    expect(submitOrderUnauth()).toEqual({
      type: SUBMIT_ORDER
    })
  });

});