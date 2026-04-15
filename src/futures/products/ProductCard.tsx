import { Link } from "react-router-dom"
import type {ProductListItem} from "../../types/product"

interface ProductCardProps {
    product: ProductListItem,
}

const ProductCard = ({product}: ProductCardProps) => {

    const imageUrl = `${import.meta.env.VITE_SITE_BASE_URL}${product.images.thumbnail}`

  return (
    <article className="flex h-full flex-col items-center rounded-2xl border border-zinc-200 bg-white p-4 text-center shadow-sm hover:shadow-md transition">
        <img src={imageUrl} alt={product.name} className="mb-3 h-40 w-full object-contain"/>
        <h2 className="line-clump-2 min-h-12 text-base font-semibold text-zinc-900">{product.name}</h2>
        <p className="mt-1 text-sm font-medium text-zinc-700">{product.price} $</p>
        <div className="mt-auto w-full space-y-2">
            <Link to={`/product/${product.id}`} className="mt-2 inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-zinc-300 px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100">Read More</Link>
            <button type="button" className="mt-3 w-full rounded-lg bg-zinc-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-zinc-700 cursor-pointer
 ">Add To Cart</button>
        </div>
    </article>
  )
}

export default ProductCard