import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Gym_nav.png';
import { BorderAllSharp } from '@mui/icons-material';

const Navbar = () => (
  <div>
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '100px', height: '80px', margin: '' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212',fontSize:"35px" }}>Home</Link>
      
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212',fontSize:"35px" }}>Exercises</a>
    </Stack>
  </Stack>
  </div>
);

export default Navbar;
