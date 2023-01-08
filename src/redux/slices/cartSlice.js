import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    totalPrice: 0,
    items:[]

}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state,action) {
            // const newItems = [...state.items, action.payload]
            state.items.push(action.payload)
        },
        removeItem(state,action) {
            state.items = state.items.filter(obj => obj.id !== action.payload)
        },
        clearItems(state) {
            state.items = []
        },
        sumCart(state) {
            if (state.items === []) {
                state.totalPrice = 0
            } else {
                state.totalPrice = state.items.reduce((acc, obj)=> acc + obj.price, 0)

            }
        }

    }
})

export const {addItem, removeItem, clearItems,sumCart} = cartSlice.actions

export default cartSlice.reducer