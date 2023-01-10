import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    category: 0,
    currentPage:1,
    sort:
        {
            name: "популярности",
            sortProp: "rating"
        }
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId: (state,action) => {
            state.category = action.payload
        },
        setActiveSort: (state,action)=>{
            state.sort = action.payload
        },
        setCurrentPage: (state,action)=>{
            state.currentPage = action.payload
        },
        setFilters:(state,action)=>{
            state.currentPage = Number(action.payload.currentPage)
            state.sort = action.payload.sort
            state.category = Number(action.payload.category)
        }
    }
})

export const {setCategoryId, setActiveSort, setCurrentPage} = filterSlice.actions

export default filterSlice.reducer