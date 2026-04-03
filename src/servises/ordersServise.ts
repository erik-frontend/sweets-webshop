import { apiClient } from "./apiClient"; 
import type { ApiResponse } from "../types/api";
import type {orderPayload, orderResponse} from "../types/order"

export const createOrder = async (payload: orderPayload):Promise<orderResponse> => {
    const response = await apiClient.post<ApiResponse<orderResponse>>("users/1/orders",payload)
    return response.data.data
}