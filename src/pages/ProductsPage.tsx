import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fatchProducts } from "../futures/products/productsSlice"
import type { RootState, AppDispatch } from "../app/store"
import ProductGrid from "../futures/products/ProductGrid"

const ProductsPage = () => {

    const dispatch = useDispatch<AppDispatch>()

    const { items, loading, error } = useSelector((state: RootState) => state.products)
    useEffect(() => {
        dispatch(fatchProducts())
    }, [dispatch])

    // const debugItems: typeof items = [] // For testing

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>
    if(items.length === 0) {
        return(
         <main className="mx-auto max-w-7xl px-4 py-6">
            <section aria-labelledby="products-heading" className="text-center py-10">
                <h1 className="font-semibold text-2xl m-1.5">Product </h1><p className="mt-2 text-zinc-600">not found</p>
            </section>
        </main>)
    }

    return (
        <main className="mx-auto max-w-7xl px-4 py-6">
            <section aria-labelledby="products-heading">
                <h1 className="text-center text-6xl m-1.5">Total products - ({items.length}) stick</h1>
                <ProductGrid items={items}/>
            </section>
        </main>
    )
}

export default ProductsPage