import {
  ADD_ITEM,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  REMOVE_ITEM,
  CALCULATE_TOTAL_PRICE,
  CALCULATE_NUMBER_OF_ITEMS
} from '../types';

export const addItem = ({ id, title, size, imageId, price }) => ({
  type: ADD_ITEM,
  payload: { id, title, size, imageId, price, quantity: 1 }
});

export const removeItem = (id, size) => ({
  type: REMOVE_ITEM,
  payload: { id, size }
});

export const increaseQuantity = (id, size) => ({
  type: INCREASE_QUANTITY,
  payload: { id, size }
});

export const decreaseQuantity = (id, size) => ({
  type: DECREASE_QUANTITY,
  payload: { id, size }
});

export const calculateTotalPrice = () => ({
  type: CALCULATE_TOTAL_PRICE
});

export const calculateNumberOfItems = () => ({
  type: CALCULATE_NUMBER_OF_ITEMS
});
