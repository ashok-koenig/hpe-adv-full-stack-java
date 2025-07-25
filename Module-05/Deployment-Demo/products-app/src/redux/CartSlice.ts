import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../pages/Products";


const initialState: {cartProduct: Product | null} = {cartProduct: null}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        buyNow: (state, action) => {
            state.cartProduct = action.payload;
        }
    }
})

export const {buyNow} = CartSlice.actions

export default CartSlice.reducer