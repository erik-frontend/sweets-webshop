import type {ProductListItem, ProductDetale} from "../types/product"
import type {ApiResponse} from "../types/api"
import { apiClient } from "./apiClient"

export const getProducts = async ():Promise<ProductListItem[]> => {
    const response = await apiClient.get<ApiResponse<ProductListItem[]>>("/products")
    // console.log(response.data.status);
    return response.data.data
}

export const getProduct = async (id:number):Promise<ProductDetale> => {
    const response = await apiClient.get<ApiResponse<ProductDetale>>(`/products/${id}`)
    console.log(response.data.data);
    
    return response.data.data
}