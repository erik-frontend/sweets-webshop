export interface BaseProduct {
    id: number
    name: string
    price: number
    stock_quantity: number
    images: {
        thumbnail: string
        large: string
    }
}

export interface ProductListItem extends BaseProduct {
    id: number
}

export interface Tag {
    name: string
    id: number
}

export interface ProductDetale extends BaseProduct {
    description: string
    tags: Tag[]
}

