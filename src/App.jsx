import { Link, BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './home'
import PixelArt from './mainPixelArt'
import Sel from './sel1'
import Musicsel from "./musicsel"
import Roadingu from "./roadingu"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pixel-art/:reff" element={<PixelArt />} />
          <Route path="/sel" element={<Sel />} />
          <Route path="/musicsel" element={<Musicsel />} />
          <Route path="/roadingu" element={<Roadingu />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App