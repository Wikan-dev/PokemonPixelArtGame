import { Link, BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './home'
import PixelArt from './mainPixelArt'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pixel-art" element={<PixelArt />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App