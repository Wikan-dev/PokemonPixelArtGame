import { Link, BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './home'
import PixelArt from './mainPixelArt'
import Sel from './sel1'
import Musicsel from "./musicsel"
import Roadingu from "./roadingu"
import Test from "./test"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pixel-art" element={<PixelArt />} />
          <Route path="/sel" element={<Sel />} />
          <Route path="/musicsel" element={<Musicsel />} />
          <Route path="/roadingu" element={<Roadingu />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App