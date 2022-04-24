import React from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton } from '@material-ui/core';
import { Link } from "react-router-dom";


const Header = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div">
          <Link to="/" style={{ textDecoration: `none`, color: `white` }}>Photos</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
)


export default Header;