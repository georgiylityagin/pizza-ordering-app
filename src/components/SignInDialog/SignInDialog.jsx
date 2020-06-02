import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PersonIcon from '@material-ui/icons/Person';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import './SignInDialog.scss';

const SignInDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        endIcon={<PersonIcon />}
        style={{marginRight: '15px'}}
        onClick={handleClickOpen}
      >Sign in</Button>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Sign In</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can sign in with your google account!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="E-mail"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="outlined">
            Cancel
          </Button>
          <Button onClick={signInWithGoogle} color="primary" variant="contained">
            Sign in with google
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default SignInDialog;
