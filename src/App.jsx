import { Link, BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './home'
import PixelArt from './mainPixelArt'
import Sel from './sel1'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pixel-art" element={<PixelArt />} />
          <Route path="/sel" element={<Sel />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App