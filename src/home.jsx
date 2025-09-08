import homeImg from "./assets/home-bg.png"
import PK from "./assets/pokepixel.png"
const Home = () => {
    return (
        <div>
            <img src={homeImg} alt="backgound Image" className="w-full h-[100vh] object-cover"/>
            <img src={PK} alt="PokePixel logo" className=""/>
        </div>
    )
}

export default Home