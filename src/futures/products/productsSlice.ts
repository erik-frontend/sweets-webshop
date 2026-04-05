import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { ProductListItem } from "../../types/product";
import { getProducts } from "../../servises/productsServise";

export interface ProductsState {
    items: ProductListItem[]
    loading: boolean
    error: string | null
}

export const initialState:ProductsState = {
    items: [],
    loading: false,
    error: null
}

export const fatchProducts = createAsyncThunk(
    "products/fatchProducts",
    async () => {
        const data = await getProducts()
        return data
    }
)

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fatchProducts.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(fatchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fatchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? "something went wrong..."
            })
    }
})

export default productsSlice.reducer