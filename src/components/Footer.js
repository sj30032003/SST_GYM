import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/icons/GYM_ICON.ico';
import { Link } from 'react-router-dom';
import { StackedLineChart } from '@mui/icons-material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = () => (

  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '50px', height: '50px' }} />
    </Stack>
    <Stack
      direction="row"
      gap="5px"
      alignItems="center"
      justifyContent="center"
    >
     <Link to="/"role="button"><FacebookIcon></FacebookIcon></Link> 
     <Link to="/"><GitHubIcon></GitHubIcon></Link> 
     <Link to="/" ><LinkedInIcon></LinkedInIcon></Link> 
     <Link to="/" ><InstagramIcon></InstagramIcon></Link>
     <Link to="/"><TwitterIcon></TwitterIcon></Link>
     <Link to="/" ><GoogleIcon></GoogleIcon></Link>
    </Stack>
    <Stack 
     gap="5PX"
     direction="row"
     alignItems="center"
     justifyContent="center"
     pt="4px"
    >
  
   Contact No  +918386999479

    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '18px', xs: '12px' } }} mt="21px" textAlign="center"justifyContent="center" pb="40px">Made by SST ❤️</Typography>
    
  </Box>
);

export default Footer;
