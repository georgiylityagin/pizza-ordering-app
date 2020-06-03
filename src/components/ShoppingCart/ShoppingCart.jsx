import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import CartItem from '../CartItem/CartItem';
import FormDialog from '../FormDialog/FormDialog';

import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  calculateTotalPrice
} from '../../redux/actions/cart';
import './ShoppingCart.scss';

const ShoppingCart = ({
  items,
  numberOfItems,
  total,
  deliveryCost,
}) => {
  const history = useHistory();

  return (
      <div className="cart-content">
        <h2 className="cart-title">
          Your Shopping Cart:
        </h2>


        {numberOfItems ? (
          <>
            <ul className="cart-list">
              {items.map((item, ind) => (
                <CartItem key={ind} {...item} />
              ))}
            </ul>
            <h4 className="cart__total-price">
              Delivery Cost &mdash; {deliveryCost.toFixed(2)} &#36;
              <div>{(deliveryCost*0.9).toFixed(2)} &euro;</div>
            </h4>
            <h4 className="cart__total-price">
              Total Price &mdash; {total.toFixed(2)} &#36;
              <div>{(total*0.9).toFixed(2)} &euro;</div>
            </h4>
          </>
          ) : (
            <h4 className="cart__message">
              The shopping cart is empty. You can go back to the menu and choose something.
            </h4>
        )}

        <div className="cart__button-group">
          <Button
            size="large"
            color="primary"
            variant="outlined"
            onClick={() => history.push('/')}
          >
            Back to menu
          </Button>

          {numberOfItems ? (
            <FormDialog />
          ) : null}  
        </div>

      </div>
  )
};

const mapStateToProps = ({cart}) => ({
  items: cart.items,
  total: cart.totalPrice,
  numberOfItems: cart.numberOfItems,
  deliveryCost: cart.deliveryCost
});

const ShoppingCartConnected = connect(mapStateToProps, {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  calculateTotalPrice
})(ShoppingCart);

export default ShoppingCartConnected;
