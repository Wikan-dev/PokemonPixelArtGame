import homeImg from "./assets/home-bg.png";
import { useState } from "react";
import data from './data/pokemon.json'

const Musicsel = () => {
    const [selected, setSelected] = useState(null);
        return (
        <div className="relative w-full h-screen overflow-hidden">
            <img src={homeImg} alt="backgound Image" className="w-full h-[100vh] object-cover"/>
            <div className="flex flex-col items-center gap-6 p-6 min-h-screen absolute inset-0 mt-20">
                <h1 className="pixel1 text-[50px] text-white mr-70 text-outline">Select Music</h1>
                <div className="flex gap-10">
                    {/* {pokemons.map((poke, idx) => (
                    <div key={idx} className="flex flex-col items-center cursor-pointer" onMouseEnter={() => setSelected(poke)} onMouseLeave={() => setSelected(null)}>
                        <img src={selected === poke ? poke.image : poke.imageDim} alt={`Pokemon ${idx}`} className="w-24 h-24"/>
                    </div>
                    ))} */}
                    {data.music.map((mus, idx) => (
                    <div key={idx} className="flex flex-col items-center cursor-pointer" onMouseEnter={() => setSelected(poke)} onMouseLeave={() => setSelected(null)}>
                        <img src={mus.image} alt={`Pokemon ${idx}`} className="w-28 h-auto  opacity-50 hover:opacity-100"/>
                    </div>
                    ))}
                </div>
                <div className="text-outline pixel1 text-[22px] text-white mt-6 bg-[#333333] rounded-l-lg p-4 w-[416px] min-h-[190px] mr-42">
                    <img src="/public/Yapping.png" alt="Pfor tolkien" className="absolute ml-100 mt-[-16px]" />
                    {selected ? <p className="w-90 text-justify">{selected.des}</p> : <p className="w-90 text-justify">Greetings, traveler. I am your guide in the realm of pocket monsters, illuminating their tales and aiding your heart in choosing a favored companion...</p>}
                </div>
            </div>
        </div>
    )
}

export default Musicsel