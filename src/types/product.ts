export interface BaseProduct {
    id: number
    name: string
    stock_quantity: number
    images: {
        thubnail: string
        large: string
    }
}

export interface ProductListItem extends BaseProduct {

}

export interface Tag {
    name: string
    id: number
}

export interface ProductDetale extends BaseProduct {
    description: string
    tags: Tag[]
}

