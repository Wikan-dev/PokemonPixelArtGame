import bggif from "./assets/horizonGIF.gif";
const roadingu = () => {
    return(
        <div className="relative w-full h-screen overflow-hidden">
            <img src={bggif} alt="Background Gif" className="w-full h-[100vh] object-cover"/>
            <div className="flex flex-col items-center min-h-screen absolute inset-0 mt-20">
                <div className="text-outline pixel1 text-[22px] text-white mt-40 bg-[#333333] rounded-l-lg p-4 w-[412px] min-h-[189px] mr-39">
                    <img src="/public/Yapping.png" alt="Pfor tolkien" className="absolute ml-99 mt-[-16px]" />
                    <p className="w-90 text-justify">May fortune be thy steadfast guide, leading thee to joyous endeavors aplenty!</p>
                    <br></br>
                    <p>The world of Pokemon awaits...</p>
                </div>
            </div>
        </div>
        
    )
}

export default roadingu