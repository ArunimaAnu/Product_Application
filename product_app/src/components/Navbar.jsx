import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

const Navbar = () => {
  return (
    <div>
        <AppBar sx={{ bgcolor: "purple" }}>
            <Toolbar>
                <ShoppingCartTwoToneIcon fontSize='large'></ShoppingCartTwoToneIcon>&nbsp;&nbsp;
                <Typography variant="h5" component="div" align='left' color="white" sx={{flexGrow:1}}>Product Management App</Typography> &nbsp;
                <Link to='/'>
                <Button variant='contained'sx={{ bgcolor: "violet" }}>HOME</Button> &nbsp; &nbsp; &nbsp;
                </Link>
                <Link to='/add'>
                <Button variant='contained'sx={{ bgcolor: "violet" }}>ADD PRODUCT</Button>&nbsp; &nbsp; &nbsp;
                </Link>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar