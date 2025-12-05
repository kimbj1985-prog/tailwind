import { Routes, Route } from "react-router-dom"

import Home from './Home';
import About from './About';
import Product from './Product';
import Board from './Board';


export default function Content() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/board" element={<Board />} />
        </Routes>
    </div>
  )
}
