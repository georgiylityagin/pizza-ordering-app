import {
  ADD_ITEM,
  REMOVE_ITEM,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CALCULATE_TOTAL_PRICE,
  CALCULATE_NUMBER_OF_ITEMS,
  SUBMIT_ORDER
} from '../types';

const initialState = {
  items: [],
  numberOfItems: 0,
  totalPrice: 0,
  deliveryCost: 10,
  freeDeliveryThreshold: 20
};


const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => (
          item.id !== action.payload.id || item.size !== action.payload.size
        ))
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        items: state.items.map(item => (
          item.id === action.payload.id && item.size === action.payload.size
            ? {...item, quantity: item.quantity + 1}
            : item
        ))
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        items: state.items.map(item => (
          item.id === action.payload.id && item.size === action.payload.size
            ? {...item, quantity: item.quantity - 1}
            : item
        )).filter(item => item.quantity >= 0)
      };
    case CALCULATE_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: calcTotalPrice(state)
      };
    case CALCULATE_NUMBER_OF_ITEMS:
      return {
        ...state,
        numberOfItems: calcNumberOfItems(state)
      };
    case SUBMIT_ORDER:
      return {
        ...state,
        items: [],
        numberOfItems: 0,
        totalPrice: 0
      }
    default:
      return state;
  }
};


function calcTotalPrice({items, deliveryCost, freeDeliveryThreshold}) {
  let total = items.reduce((acc, item) => (
    acc += item.price * item.quantity
  ), 0);

  if (total < freeDeliveryThreshold) {
    total += deliveryCost;
  }

  return total;
};

function calcNumberOfItems({items}) {
  let count = 0;

  for (let item of items) {
   count += item.quantity; 
  }

  return count;
}


export default cartReducer;
