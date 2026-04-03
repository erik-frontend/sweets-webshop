import type {ApiResponse} from "../types/api"
import { apiClient } from "./apiClient"
import type { ProductListItem, Tag } from "../types/product"

export const getTags = async ():Promise<Tag[]> => {
    const response = await apiClient.get<ApiResponse<Tag[]>>("/tags")
    return response.data.data
}

export const getProductsByTag = async (id: number):Promise<ProductListItem[]> => {
    const response = await apiClient.get<ApiResponse<ProductListItem[]>>(`/tags/${id}`)
    return response.data.data
}