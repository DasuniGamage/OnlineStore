import { Button, Card, CardActions, CardContent, CardMedia, Grid, Paper, Typography } from '@mui/material';
import Image from '../assets/images/2.jpg'
import { useDispatch, useSelector } from 'react-redux';
import cartSlice from '../redux/cartSlice';
import { fetchAllProducts } from '../redux/productSlice';


const Item = ({title,price,id}) => {

  const {addToCart,removeFromCart}=cartSlice.actions;
  const state = useSelector((state)=>state)
  //destructure cart and products from state
  const {cart,products} = state;
  // const {cartProductIds} = useSelector((state)=>state.cart)
  const dispatch = useDispatch();






  return (
    <Card xs={12} md={6} lg={3} sx={{ maxWidth:  300,m:2,p: 2}}>
      <CardMedia
        component="img"
        alt="product"
        height="200"
        image={Image}
      />
      <CardContent sx={{textAlign: "center"}}>
        <Typography gutterBottom variant="h5" component="div" >
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">${price}</Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center"}}>
      </CardActions>
        {!cart.cartProductIds.includes(id) && (<Button variant="contained" size="medium" onClick={()=>dispatch(addToCart(id))}>Add to cart</Button>)}
        {cart.cartProductIds.includes(id) && (<Button variant="contained" size="medium" onClick={()=>dispatch(removeFromCart(id))}>Remove from cart</Button>)}
        {/* {!cartProductIds.includes(id) && (<Button variant="contained" size="medium" onClick={()=>dispatch(addToCart(id))}>Add to cart</Button>)}
        {cartProductIds.includes(id) && (<Button variant="contained" size="medium" onClick={()=>dispatch(removeFromCart(id))}>Remove from cart</Button>)} */}
    </Card>
  )
}

export default Item;
