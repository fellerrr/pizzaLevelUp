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
        const findItem = state.items.find(obj => obj.id === action.payload.id
            && obj.type === action.payload.type && obj.size === action.payload.size)
        if (findItem){
            findItem.count++
        } else {
            state.items.push({
                ...action.payload,
                count:1
            })
        }
        state.totalPrice = state.items.reduce((acc, obj)=> acc + obj.price * obj.count, 0)
        },
        minusItem(state,action){
            console.log(action.payload)
            const findItem = state.items.find(obj => obj.id === action.payload.id
                && obj.type === action.payload.type && obj.size === action.payload.size)

            if (findItem && findItem.count>0){
                findItem.count--
            }
            state.totalPrice = state.items.reduce((acc, obj)=> acc + obj.price * obj.count, 0)
        },
        removeItem(state,action) {
            const { id, size, type } = action.payload;
            state.items = state.items.filter(item => item.id !== id || item.size !== size || item.type !== type);
            state.totalPrice = state.items.reduce((acc, obj)=> acc + obj.price * obj.count, 0)
        },
        clearItems(state) {
            state.items = []
            state.totalPrice = 0
        },
    }
})

export const {addItem, removeItem, clearItems, minusItem} = cartSlice.actions

export default cartSlice.reducer