import {BrowserRouter, Route, Routes} from 'react-router-dom'

export function AppRouter() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<div>product catalog</div>}/>
                <Route path='*'element={<div>page not found</div>}/>
            </Routes>            
        </BrowserRouter>
    )
}
