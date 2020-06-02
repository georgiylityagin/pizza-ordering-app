import React from 'react';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  calculateTotalPrice,
  calculateNumberOfItems
} from '../../redux/actions/cart';

import './CartItem.scss';

const CartItem = ({
  id,
  title,
  size, 
  imageId,
  price,
  quantity,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  calculateTotalPrice,
  calculateNumberOfItems
}) => {

  const handleIncrease = () => {
    increaseQuantity(id, size);
    calculateNumberOfItems();
    calculateTotalPrice();
  };

  const handleDecrease = () => {
    if (quantity === 1) {
      removeItem(id, size);
    } else {
      decreaseQuantity(id, size);
    }
    calculateNumberOfItems();
    calculateTotalPrice();
  }

  const handleDelete = () => {
    removeItem(id, size);
    calculateNumberOfItems();
    calculateTotalPrice();
  }

  return (
    <li className="cart-item">
      <div className="cart-item__main-info">
        <img
          className="cart-item__image"
          src={`./img/${imageId}.jpg`}
          alt={title}
        />
        <div className="cart-item__description">
          <h3 className="cart-item__title">{title}</h3>
          <div className="cart-item__size">{size}</div>
        </div>
      </div>

      <div style={{flexGrow: 1}}></div>

        <div className="cart-item__controls">
          <button
            className="cart-item__change-quantity"
            onClick={handleDecrease}
          >-</button>
            <span className="cart-item__quantity">
              {quantity}
            </span>
          <button
            className="cart-item__change-quantity"
            onClick={handleIncrease}
          >+</button>
        </div>

        <div className="cart-item__price">
          <div className="cart-item__price-dollars">
            {price.toFixed(2)} &#36;
          </div>
          <div className="cart-item__price-euro">
            {(price * 0.9).toFixed(2)} &euro;
          </div>
        </div>

        <IconButton aria-label="delete" onClick={handleDelete} className="cart-item__delete">
          <DeleteIcon fontSize="default" />
        </IconButton>
    </li>
  )
};

const CartItemConnected = connect(null, {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  calculateTotalPrice,
  calculateNumberOfItems
})(CartItem);

export default CartItemConnected;
