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
        removeCart: (state) => {
            state.cart = 0
            state.items = []
        },
    }
})


export const {
    addCart,
    removeCart
} = cartSlice.actions

export default cartSlice.reducer