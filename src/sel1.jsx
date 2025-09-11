import homeImg from "./assets/home-bg.png";
import { useState } from "react";

const Sel = () => {
    const [selected, setSelected] = useState(null);

    const pokemons = [
        {
            image: "/Frame1.png",
            des: "Wingull, the ocean's minstrel. Clad in snow and sapphire, its melody rides on sea winds, an emblem of freedom over endless shores, cliffs, and the broad azure sea. This Pokemon calls to dreamers who find their muse in the freedom of the ocean's expanse.",
            id: "1"
        },
        {
            image: "/Frame2.png",
            des: "test",
            id: "2"
        },
        {
            image: "/Frame3.png",
            des: "test",
            id: "3"
        },
        {
            image: "/Frame4.png",
            des: "test",
            id: "4"
        },
    ];
        return (
        <div className="relative w-full h-screen overflow-hidden">
            <img src={homeImg} alt="backgound Image" className="w-full h-[100vh] object-cover"/>
            <div className="flex flex-col items-center gap-6 p-6 min-h-screen absolute inset-0 mt-20">
                <h1 className="pixel1 text-[50px] text-white mr-70 text-outline">Select Pokemon</h1>
                <div className="flex gap-10">
                    {/* {pokemons.map((poke, idx) => (
                    <div key={idx} className="flex flex-col items-center cursor-pointer" onMouseEnter={() => setSelected(poke)} onMouseLeave={() => setSelected(null)}>
                        <img src={selected === poke ? poke.image : poke.imageDim} alt={`Pokemon ${idx}`} className="w-24 h-24"/>
                    </div>
                    ))} */}
                    {pokemons.map((poke, idx) => (
                    <div key={idx} className="flex flex-col items-center cursor-pointer" onMouseEnter={() => setSelected(poke)} onMouseLeave={() => setSelected(null)}>
                        <img src={poke.image} alt={`Pokemon ${idx}`} className="w-28 h-auto  opacity-50 hover:opacity-100"/>
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

export default Sel