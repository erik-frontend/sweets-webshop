import {configureStore} from '@reduxjs/toolkit'
import productsReduse from '../futures/products/productsSlice'

export const store = configureStore({
    reducer: {products: productsReduse}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch