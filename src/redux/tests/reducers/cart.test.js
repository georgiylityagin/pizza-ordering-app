import {
  ADD_ITEM,
  REMOVE_ITEM,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CALCULATE_TOTAL_PRICE,
  CALCULATE_NUMBER_OF_ITEMS,
  SUBMIT_ORDER
} from '../../types';

import reducer from '../../reducers/cart';

describe('Redux: cart reducers', () => {

  test('should update the state when dispatch add-item action', () => {
    const initialState = {
      items: [],
      numberOfItems: 0,
      totalPrice: 0,
      deliveryCost: 10,
      freeDeliveryThreshold: 20
    };

    const item = {
      id: 5,
      title: 'pizza1',
      size: 'small',
      imageId: 'pizza1',
      price: 10
    };

    expect(reducer(undefined, {type: ADD_ITEM, payload: item}))
      .toEqual({...initialState, items: [item]}) 
  })

  test('should update the state when dispatch remove-item action', () => {
    const state = {
      items: [
        {
          id: 5,
          title: 'pizza1',
          size: 'small',
          imageId: 'pizza1',
          price: 10
        }
      ],
      numberOfItems: 0,
      totalPrice: 0,
      deliveryCost: 10,
      freeDeliveryThreshold: 20
    };

    expect(reducer(state, {type: REMOVE_ITEM, payload: {id: 5, size: 'small'}}))
      .toEqual({...state, items: []}) 
  })

  test('should update the state when increasing quantity', () => {
    const state = {
      items: [
        {
          id: 5,
          title: 'pizza1',
          size: 'small',
          imageId: 'pizza1',
          quantity: 1,
          price: 10
        }
      ],
      numberOfItems: 0,
      totalPrice: 0,
      deliveryCost: 10,
      freeDeliveryThreshold: 20
    };

    expect(reducer(state, {type: INCREASE_QUANTITY, payload: {id: 5, size: 'small'}}))
      .toEqual({...state, items: [{
        id: 5,
        title: 'pizza1',
        size: 'small',
        imageId: 'pizza1',
        price: 10,
        quantity: 2
      }]}) 
  })

  test('should update the state when decreasing quantity', () => {
    const state = {
      items: [
        {
          id: 5,
          title: 'pizza1',
          size: 'small',
          imageId: 'pizza1',
          quantity: 2,
          price: 10
        }
      ],
      numberOfItems: 0,
      totalPrice: 0,
      deliveryCost: 10,
      freeDeliveryThreshold: 20
    };

    expect(reducer(state, {type: DECREASE_QUANTITY, payload: {id: 5, size: 'small'}}))
      .toEqual({...state, items: [{
        id: 5,
        title: 'pizza1',
        size: 'small',
        imageId: 'pizza1',
        price: 10,
        quantity: 1
      }]}) 
  })

  test('should calculate number of items', () => {
    const state = {
      items: [
        {
          id: 5,
          title: 'pizza1',
          size: 'small',
          imageId: 'pizza1',
          quantity: 2,
          price: 10
        },
        {
          id: 6,
          title: 'pizza2',
          size: 'small',
          imageId: 'pizza2',
          quantity: 1,
          price: 15
        },
      ],
      numberOfItems: 0,
      totalPrice: 0,
      deliveryCost: 10,
      freeDeliveryThreshold: 20
    };

    expect(reducer(state, {type: CALCULATE_NUMBER_OF_ITEMS}))
      .toEqual({...state, numberOfItems: 3}) 
  })


  test('should calculate total price', () => {
    const state = {
      items: [
        {
          id: 5,
          title: 'pizza1',
          size: 'small',
          imageId: 'pizza1',
          quantity: 2,
          price: 10
        },
        {
          id: 6,
          title: 'pizza2',
          size: 'small',
          imageId: 'pizza2',
          quantity: 1,
          price: 15
        },
      ],
      numberOfItems: 0,
      totalPrice: 0,
      deliveryCost: 10,
      freeDeliveryThreshold: 20
    };

    expect(reducer(state, {type: CALCULATE_TOTAL_PRICE}))
      .toEqual({...state, totalPrice: 35}) 
  })

  test('should update state when submit order', () => {
    const state = {
      items: [
        {
          id: 5,
          title: 'pizza1',
          size: 'small',
          imageId: 'pizza1',
          quantity: 2,
          price: 10
        },
        {
          id: 6,
          title: 'pizza2',
          size: 'small',
          imageId: 'pizza2',
          quantity: 1,
          price: 15
        },
      ],
      numberOfItems: 0,
      totalPrice: 0,
      deliveryCost: 10,
      freeDeliveryThreshold: 20
    };

    expect(reducer(state, {type: SUBMIT_ORDER}))
      .toEqual({...state, items: []}) 
  })

});