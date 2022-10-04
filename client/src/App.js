import React from 'react'
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
const App = () => {
    return( <div>
        <BrowserRouter>
            <Routes>
            <Route path ='/login' exact element={<Login/>}/>
            <Route path ='/register' exact element={<Register/>}/>
            </Routes>
        </BrowserRouter>

    </div>)
}
export default App