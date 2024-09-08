import { Box, Button, Input, TextField, Typography } from '@mui/material'
import React from 'react'

const Addproduct = () => {
  return (
    <div>
        <Box><Typography variant='h1' sx={{textDecoration: 'underline'}}>Product Details</Typography></Box><br/><br/>
        <TextField label="product_name" variant="outlined"></TextField><br/><br/>
          <TextField label="image upload" variant="outlined"></TextField><br /><br/>
          <Typography align='center'><Button variant="outlined">Browse</Button></Typography> <br />
          <TextField label="price" variant="outlined"></TextField><br/><br/>
          <TextField label="category" variant="outlined"></TextField><br /><br />
          <Button variant="contained" size='large'sx={{paddingX:7,paddingY:1}}>ADD</Button> 
          
    </div>
  )
}

export default Addproduct