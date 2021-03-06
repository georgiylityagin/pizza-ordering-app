import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  calculateTotalPrice,
  calculateNumberOfItems
} from '../../redux/actions/cart';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import './MenuCard.scss';

const useStyles = makeStyles(() => ({
  formControl: {
    minWidth: 120
  }
}));

const MenuCard = ({
  id,
  category,
  imageId,
  title,
  ingredients,
  volume,
  price,
  items,
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  calculateTotalPrice,
  calculateNumberOfItems
}) => {
  const classes = useStyles();
  const [size, setSize] = useState('small');
  const [quantity, setQuantity] = useState({});

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  const handleAddItem = () => {
    addItem({
      id,
      title,
      size,
      imageId,
      price: price[size]
    });
    calculateNumberOfItems();
    calculateTotalPrice();
  };

  const handleIncrease = () => {
    increaseQuantity(id, size);
    calculateNumberOfItems();
    calculateTotalPrice();
  };

  const handleDecrease = () => {
    if (quantity[size] === 1) {
      removeItem(id, size);
      setQuantity({ ...quantity, [size]: 0 });
    } else {
      decreaseQuantity(id, size);
    }
    calculateNumberOfItems();
    calculateTotalPrice();
  };

  useEffect(() => {
    let currentItem = items.filter(
      (item) => item.id === id && item.size === size
    );

    if (currentItem.length > 0) {
      setQuantity({ ...quantity, [size]: currentItem[0].quantity });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, id, size]);

  return (
    <Paper className='menu-item'>
      <div className='menu-item__media'>
        <img src={`./img/${imageId}.jpg`} alt={title} width='220px' />
      </div>

      <div className='menu-item__content'>
        <Typography gutterBottom variant='h5' component='h2'>
          {title}
        </Typography>
        {ingredients && (
          <Typography variant='body2' component='p' color='secondary'>
            {ingredients}
          </Typography>
        )}
      </div>

      <div>
        <div className='menu-item__options'>
          {category === 'pizza' ? (
            <FormControl className={classes.formControl}>
              <InputLabel>Size</InputLabel>
              <Select value={size} onChange={handleChange}>
                <MenuItem value='small'>
                  <Typography variant='body2'>small &mdash; 25cm</Typography>
                </MenuItem>
                <MenuItem value='medium'>
                  <Typography variant='body2'>medium &mdash; 30cm</Typography>
                </MenuItem>
                <MenuItem value='big'>
                  <Typography variant='body2'>big &mdash; 35cm</Typography>
                </MenuItem>
              </Select>
            </FormControl>
          ) : (
            <div>
              <Typography variant='caption' color='secondary'>
                volume:
              </Typography>
              <Typography variant='body2'>{volume} l</Typography>
            </div>
          )}

          <div className='menu-item__price'>
            <div className='menu-item__price-dollars'>
              {price[size].toFixed(2)} &#36;
            </div>
            <div className='menu-item__price-euro'>
              {(price[size] * 0.9).toFixed(2)} &euro;
            </div>
          </div>
        </div>

        <div className='menu-item__actions'>
          <Button
            className='submit-btn'
            variant='outlined'
            color='primary'
            disabled={quantity[size] ? true : false}
            onClick={handleAddItem}
          >
            {quantity[size] ? 'In cart' : 'Add to cart'}
          </Button>

          {quantity[size] ? (
            <div className='menu-item__quantity'>
              <button className='change-quantity' onClick={handleDecrease}>
                -
              </button>
              <span className='quantity-value'>{quantity[size]}</span>
              <button className='change-quantity' onClick={handleIncrease}>
                +
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </Paper>
  );
};

const mapStateToProps = ({ cart }) => ({
  items: cart.items
});

const MenuCardConnected = connect(mapStateToProps, {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  calculateTotalPrice,
  calculateNumberOfItems
})(MenuCard);

export default React.memo(MenuCardConnected);
