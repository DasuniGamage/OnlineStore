import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../redux/cartSlice";
import productSlice from "../redux/productSlice";



const store = configureStore({
    reducer:{
        cart: cartSlice.reducer,
        products: productSlice.reducer,
    }
})

export default store;