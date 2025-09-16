import bggif from "./assets/horizonGIF.gif";
import { useState } from "react";
import data from './data/pokemon.json'
import { Link, useLocation } from "react-router-dom";

const Musicsel = () => {
    const { state } = useLocation();
    console.log("state yang di terima: ", state);

    const [selected, setSelected] = useState(null);
        return (
        <div className="relative w-full h-screen overflow-hidden">
            <img src={bggif} alt="backgound Image" className="w-full h-[100vh] object-cover"/>
            <div className="flex flex-col items-center gap-6 p-6 min-h-screen absolute inset-0 mt-20">
                <h1 className="pixel1 text-[50px] text-white mr-80 text-outline">Select Music</h1>
                <div className="flex gap-10">
                    {/* {pokemons.map((poke, idx) => (
                    <div key={idx} className="flex flex-col items-center cursor-pointer" onMouseEnter={() => setSelected(poke)} onMouseLeave={() => setSelected(null)}>
                        <img src={selected === poke ? poke.image : poke.imageDim} alt={`Pokemon ${idx}`} className="w-24 h-24"/>
                    </div>
                    ))} */}
                    {data.music.map((mus, idx) => (
                    <div key={idx} className="flex flex-col items-center cursor-pointer" onMouseEnter={() => setSelected(mus)} onMouseLeave={() => setSelected(null)}>
                        <a href={mus.link} target="_blank" rel="noopener noreferrer">
                            <img src={import.meta.env.BASE_URL + mus.image.slice(1)} alt={`Pokemon ${idx}`} className="w-40 h-auto  opacity-50 hover:opacity-100"></img>
                        </a>
                    </div>
                    ))}
                </div>
                <div className="text-outline pixel1 text-[22px] text-white mt-6 bg-[#333333] rounded-l-lg p-4 w-[412px] min-h-[189px] mr-39">
                    <img src={import.meta.env.BASE_URL + "Yapping.png"} alt="Pfor tolkien" className="absolute ml-99 mt-[-16px]" />
                    {<p className="w-90 text-justify">Let it be known far and wide: music, the mellifluous voice of the soul, is a wondrous and ethereal companion, a symphony of boundless delight and eternal enchantment.</p>}
                </div>
                <div className="cursor-pointer bg-white w-60 h-16 text-center text-[25px] border-3 border-[#808080] rounded-sm">
                    <Link to='/pixel-art' state={{...state}}><button className="cursor-pointer mt-3 pixel1">Start Painting ⟩</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Musicsel