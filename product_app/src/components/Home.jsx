import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
    var[product,setProduct]=useState([])

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            console.log(res.data)
            setProduct(res.data)
            })
    }, [])
        
  return (
    <div>
       <br/><br/><Box sx={{backgroundImage:"url('https://png.pngtree.com/background/20210709/original/pngtree-candy-color-rectangle-girl-cute-picture-image_915397.jpg')", opacity:'0.4'}}> <Typography variant='h1' color='navy' sx={{opacity:'1'}}>Welcome</Typography>
       <Typography variant='h5'>Shop till you drop!</Typography>
       </Box><br/><br/>
        <Grid container spacing={2} >
            {product.map((val)=>{
                return(
                    <Grid item xs={3}>
                        <Card sx={{ maxWidth: 245}}>
                            <CardMedia 
                                sx={{ height: 250 }}
                                image={val.image}/>

                            <CardContent >
                                <Typography gutterBottom variant="h5" component="div">{val.title}</Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Price:&nbsp;{val.price}</Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Category:&nbsp;{val.category}</Typography>
                            </CardContent>
                        </Card>

                    </Grid>
                )
            })}

        </Grid>
    </div>
  )
}

export default Home