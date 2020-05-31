import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import './menu-card.scss';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  },
}));

const MenuCard = ({category, imageId, title, ingredients, volume, price}) => {
  const classes = useStyles();
  const [size, setSize] = useState('small');

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <Paper className="menu-item">
      <div className="menu-item__media">
        <img
          src={`./img/${imageId}.jpg`}
          alt={title}
          width="220px"
        />
      </div>

      <div className="menu-item__content">
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        {
          ingredients && (
            <Typography variant="body2" component="p">
              {ingredients}
            </Typography>
          )
        }
      </div>

      <div>
        <div className="menu-item__options">
          {
            category === "pizza" ?
              <FormControl className={classes.formControl}>
                <InputLabel>Size</InputLabel>
                <Select
                  value={size}
                  onChange={handleChange}
                >
                  <MenuItem value='small'>
                    <Typography variant='body2'>
                      small &mdash; 25cm
                    </Typography>
                  </MenuItem>
                  <MenuItem value='medium'>
                    <Typography variant='body2'>
                      medium &mdash; 30cm
                    </Typography>
                  </MenuItem>
                  <MenuItem value='big'>
                    <Typography variant='body2'>
                      big &mdash; 35cm
                    </Typography>
                  </MenuItem>
                </Select>
              </FormControl> :
              <div>
                <Typography variant="caption" color="secondary">volume:</Typography>
                <Typography variant="body2">{volume} l</Typography>
              </div>
          }

          <div className="menu-item__price">
            <div className="menu-item__price-dollars">
              {(price[size] || price).toFixed(2)} &#36;
            </div>
            <div className="menu-item__price-euro">
              {(price[size] * 0.9 || price * 0.9).toFixed(2)} &euro;
            </div>
          </div>
        </div>
        <div className="menu-item__actions">
          <Button
            className="submit-btn"
            variant="outlined"
            color='primary'
          >Add to Cart</Button>
          <div className="menu-item__quantity">
            <button className="change-quantity">-</button>
              <span className="quantity-value">0</span>
            <button className="change-quantity">+</button>
          </div>
        </div>
      </div>
    </Paper>
  )
};

export default MenuCard;
