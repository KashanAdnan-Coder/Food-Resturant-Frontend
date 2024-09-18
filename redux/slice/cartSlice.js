import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: 0,
    items: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action) => {
            state.cart += 1
            state.items = [
                ...state.items.slice(0, action.index),
                action.payload,
            ]
        },
        removeSingleCart: (state, action) => {
            state.cart -= state.cart === 0 ? 0 : 1
            let cart = state.items.filter((item, index) => index !== action.payload)
            state.items = cart
        },
    }
})


export const {
    addCart,
    removeSingleCart
} = cartSlice.actions

export default cartSlice.reducer