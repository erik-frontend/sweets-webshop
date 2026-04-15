import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ProductsPage from '../pages/ProductsPage'

export function AppRouter() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ProductsPage/>}/>
                <Route path='*'element={<div>page not found</div>}/>
            </Routes>            
        </BrowserRouter>
    )
}
