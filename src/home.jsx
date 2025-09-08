import homeImg from "./assets/home-bg.png"
import PK from "./assets/pokepixel.png"
const Home = () => {
    return (
        <div>
            <img src={homeImg} alt="backgound Image" className="w-full h-[100vh] object-cover"/>
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <img src={PK} alt="PokePixel logo" className="mt-[-500px]"/>
                <p className="text-white text-lg font-bold mt-10">Paint Pokemon — One Color at a Time</p>
            </div>    
        </div>
    )
}

export default Home