import type { ProductListItem } from "../../types/product"
import ProductCard from "./ProductCard"

interface productGridProps {
    items: ProductListItem[]
}

const ProductGrid = ({ items }: productGridProps) => {
    return (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((product) => {
                return (<li key={product.id}>
                    <ProductCard product={product} />
                </li>)
            }
            )}
        </ul>
    )
}

export default ProductGrid