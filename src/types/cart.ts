import type {ProductListItem} from "./product"

export type CardProduct = Pick<
    ProductListItem, 
    "id" | "name" | "price" | "stock_quantity" | "images"
>

export interface CardItem {
    product: CardProduct;
    qty: number;
}

export interface CardState {
    items: CardItem[];
    total: number;
}