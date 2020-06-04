import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import blueGrey from '@material-ui/core/colors/blueGrey';
import './Footer.scss';

const grey = blueGrey[500];

const Footer = () => (
  <Box className='footer' bgcolor={grey} color='#fff'>
    <Typography align='center' variant='body2'>
      &copy; 2020 Georgiy Lityagin. Test assignment for Innoscripta
      International.
    </Typography>
  </Box>
);

export default Footer;
