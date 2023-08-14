import { useState } from "react"
import Navbar from "./components/navbar/index"
import {Route, Routes} from "react-router-dom"
import Home from "./page/home"
import One from "./page/one"

const App = () => {
    const [id, setId] = useState(0)

    const getByCategory = (id) => {
        setId(id)
    }
    return (
        <div>
            <Navbar getByCategory={getByCategory} />

            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route path="/one/:id" element={<One/>}/>
            </Routes>
            
        </div>
    )
}

export default App