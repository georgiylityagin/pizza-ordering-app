import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { submitOrder, submitOrderUnauth } from '../../redux/actions/firebase';

import './FormDialog.scss';

const FormDialog = ({userAuth, items, totalPrice, submitOrder, submitOrderUnauth}) => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePayment = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleInputChange = (event) => {
    switch (event.target.id) {
      case 'name':
        setName(event.target.value);
        break;
      case 'address':
        setAddress(event.target.value);
        break;
      case 'email':
        setEmail(event.target.value);
        break;
      default:
    }
  }

  const handleSubmit = () => {
    const contacts = {
      name,
      address,
      email,
      paymentMethod
    };

    userAuth
      ? submitOrder({userAuth, items, totalPrice, contacts})
      : submitOrderUnauth();

    history.push('/history');
  };

  return (
    <div>
      <Button
        size="large"
        color="primary"
        variant="contained"
        onClick={handleClickOpen}
      >
        Make an order
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Leave us your contacts</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p>
              Please, fill your contact information in the little form below.<br />
              We will deliver your order in 1 hour!
            </p>
          </DialogContentText>
          <TextField
            required
            autoFocus
            margin="dense"
            id="name"
            label="Your name"
            type="text"
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            required
            margin="dense"
            id="address"
            label="Address"
            type="text"
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            required
            margin="dense"
            id="email"
            label="E-mail"
            onChange={handleInputChange}
            fullWidth
          />
          <FormControl component="fieldset" className="form-dialog__payment">
            <FormLabel component="legend">Payment Method</FormLabel>
            <RadioGroup row aria-label="payment" name="payment1" value={paymentMethod} onChange={handlePayment}>
              <FormControlLabel value="cash" control={<Radio />} label="Cash" />
              <FormControlLabel value="credit card" control={<Radio />} label="Credit card" />
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary" variant="contained">
            Confirm order
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
};

const mapStateToProps = ({cart, firebase}) => ({
  items: cart.items,
  totalPrice: cart.totalPrice,
  userAuth: firebase.currentUser
});

const FormDialogConnected = connect(mapStateToProps, {
  submitOrder,
  submitOrderUnauth
})(FormDialog);

export default FormDialogConnected;
