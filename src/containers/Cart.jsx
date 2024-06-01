import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import productList from '../data/productList.json'
import Item from './Item'


const Cart = () => {

  const {cartProductIds} = useSelector((state)=>state.cart);
  const cartProductData = productList.products.filter((product)=> cartProductIds.includes(product.id))
  return (
    <Box p={2}>
        <Paper sx={{ p: 4  }}>
          <Grid>
          <Typography variant="h4"> 
              Items in the cart
          </Typography>
          </Grid>
          {!cartProductData.length> 0 &&(<Grid spacing={2}>
                
                <Typography>
                    Your cart is empty
                </Typography>
                <Typography>
                    You have not added any items to your cart
                </Typography>
          </Grid>)}
          {cartProductData.length>0 && (<Grid container spacing={3}>
          {cartProductData.map((product)=>(
           <Grid item xs={12} sm={6} md={4} lg={3} key={product.id} >
            <Item   title={product.title} price={product.price} id={product.id}/>
            </Grid>
        ))}
          </Grid>)}
        </Paper>
    </Box>





    // <Grid 
    //     direction="column"
    //     justifyContent="space-between"
    //     style={{ minHeight: "80vh" }}
    // >
    //         <Typography variant="h4"> 
    //             Items in the cart
    //         </Typography>
    //     <Grid >
    //         <Typography>
    //             Your cart is empty
    //         </Typography>
    //         <Typography>
    //             You have not added any items to your cart
    //         </Typography>
    //     </Grid>
    // </Grid>
  )
}

export default Cart
