import { AppBar, Badge, Box, Button, IconButton, Toolbar, Typography, useTheme } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { ShoppingCart } from '@mui/icons-material';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const {cartProductIds}= useSelector((state)=>state.cart)
  const theme=useTheme();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: theme.palette.primary.light }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            OnlineStore
          </Typography>
          <IconButton 
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Badge badgeContent={cartProductIds.length} color="primary" anchorOrigin={{vertical: 'top', horizontal: 'right'}}  ><ShoppingCart /></Badge>
          </IconButton>
          
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar;

