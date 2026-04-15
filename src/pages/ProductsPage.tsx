import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fatchProducts } from "../futures/products/productsSlice"
import type { RootState, AppDispatch } from "../app/store"
import ProductCard from "../futures/products/ProductCard"
import ProductGrid from "../futures/products/ProductGrid"

const ProductsPage = () => {

    const dispatch = useDispatch<AppDispatch>()

    const { items, loading, error } = useSelector((state: RootState) => state.products)
    useEffect(() => {
        dispatch(fatchProducts())
    }, [dispatch])

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <main className="mx-auto max-w-7xl px-4 py-6">
            <section ria-labelledby="products-heading" id="products-heading">
                <h1 className="text-center text-6xl m-1.5">Total products - ({items.length}) stick</h1>
                <ProductGrid items={items}/>
            </section>
        </main>
    )
}

export default ProductsPage