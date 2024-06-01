import React, { useEffect } from 'react'
// import productList from '../data/productList.json'
import { Grid } from '@mui/material'
import Item from './Item'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../redux/productSlice';

const Products = () => {

  const dispatch = useDispatch();


  // npx json-server './src/data/productList.json' created a server and gives an api endpoint to get all products.
  // the response of this api endpoint will be the jspn object in './src/data/productList.json'
  const state = useSelector((state)=>state)
  const {cart,products} = state;

  useEffect(()=>{
    dispatch(fetchAllProducts('http://localhost:3000/products'))
  },[dispatch])
  
  return (
    <Grid container spacing={3}>
        {products.data?.map((product)=>(
           <Grid item xs={12} sm={6} md={4} lg={3} key={product.id} >
            <Item   title={product.title} price={product.price} id={product.id}/>
            </Grid>
        ))}

    </Grid>
  )
}

export default Products
