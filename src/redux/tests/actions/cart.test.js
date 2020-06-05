import {
  ADD_ITEM,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  REMOVE_ITEM,
  CALCULATE_TOTAL_PRICE,
  CALCULATE_NUMBER_OF_ITEMS
} from '../../types';

import {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  calculateNumberOfItems,
  calculateTotalPrice
} from '../../actions/cart';

describe('Redux: cart actions:', () => {

  test('shoul create an action to add item', () => {
    const item = {
      id: 5,
      title: 'pizza1',
      size: 'small',
      imageId: 'pizza1',
      price: 10
    };

    expect(addItem(item)).toEqual({
      type: ADD_ITEM,
      payload: {...item, quantity: 1}
    });
  });

  test('shoul create an action to remove item', () => {
    const id = 5;
    const size = 'small';

    expect(removeItem(id, size)).toEqual({
      type: REMOVE_ITEM,
      payload: {id, size}
    })
  })

  test('shoul create an action to increase quantity of item', () => {
    const id = 5;
    const size = 'small';

    expect(increaseQuantity(id, size)).toEqual({
      type: INCREASE_QUANTITY,
      payload: {id, size}
    })
  })

  test('shoul create an action to decrease quantity of item', () => {
    const id = 5;
    const size = 'small';

    expect(decreaseQuantity(id, size)).toEqual({
      type: DECREASE_QUANTITY,
      payload: {id, size}
    })
  })

  test('shoul create an action to calculate number of items', () => {
    expect(calculateNumberOfItems()).toEqual({
      type: CALCULATE_NUMBER_OF_ITEMS
    })
  })
  
  test('shoul create an action to calculate total price', () => {
    expect(calculateTotalPrice()).toEqual({
      type: CALCULATE_TOTAL_PRICE
    })
  })

});