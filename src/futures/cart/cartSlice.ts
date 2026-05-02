import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {CardItem,CardState,CardProduct} from "../../types/cart"


const initialState:CardState = {
    items: [],
    total: 0,
}

const calculateTotal = (items:CardItem[]):number => {
    return items.reduce((sum, item) => sum + item.product.price * item.qty, 0)
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action:PayloadAction<CardProduct>) => {
            const product = action.payload
            const existItem = state.items.find(
                item => item.product.id === product.id
            )
            if(existItem){
                if(existItem.qty < existItem.product.stock_quantity) existItem.qty += 1
                else state.items.push({product, qty:1})
            }
            state.total = calculateTotal(state.items)
        } 
    }
})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer