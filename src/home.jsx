import homeImg from "./assets/home-bg.png"
import PK from "./assets/pokepixel.png"
const Home = () => {
    return (
        <div>
            <img src={homeImg} alt="backgound Image" className="w-full h-[100vh] object-cover"/>
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <img src={PK} alt="PokePixel logo" className="mt-[-500px]"/>
                <p className="pixel1 text-white text-lg mt-10 text-[30px] text-outline">Paint Pokemon — One Color at a Time</p>
            </div>
            <div>
                <a href="#" className="pixel1 absolute inset-0 text-white items-center text-outline z-10 flex flex-col top-[650px] text-[50px]">Enter ›</a>
            </div>
        </div>
    )
}

export default Home