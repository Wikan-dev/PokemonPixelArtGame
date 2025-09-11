import homeImg from "./assets/home-bg.png";
import pokemon from "./assets/Frame1.png";
import { useState } from "react";

const Sel = () => {
    const [selected, setSelected] = useState(null);

    const pokemons = [
        {
            image: "/Frame1b.png",
            imageDim: "/Frame1.png",
            des: "Wingull, the ocean's minstrel. Clad in snow and sapphire, its melody rides on sea winds, an emblem of freedom over endless shores, cliffs, and the broad azure sea. This Pokemon calls to dreamers who find their muse in the freedom of the ocean's expanse."
        }
    ];
        return (
        <div>
            <img src={homeImg} alt="backgound Image" className="w-full h-[100vh] object-cover"/>
            <div className="flex flex-col items-center gap-6 p-6 min-h-screen absolute inset-0">
                <h1 className="pixel1 text-[50px] text-white">Select Pokemon</h1>
                <div className="flex gap-6">
                    {/* {pokemons.map((poke, idx) => (
                    <div key={idx} className="flex flex-col items-center cursor-pointer" onMouseEnter={() => setSelected(poke)} onMouseLeave={() => setSelected(null)}>
                        <img src={selected === poke ? poke.image : poke.imageDim} alt={`Pokemon ${idx}`} className="w-24 h-24"/>
                    </div>
                    ))} */}
                    {pokemons.map((poke, idx) => (
                    <div key={idx} className="flex flex-col items-center cursor-pointer opacity-50 hover:opacity-100" onMouseEnter={() => setSelected(poke)} onMouseLeave={() => setSelected(null)}>
                        <img src={pokemon} className="w-24 h-24"/>
                    </div>
                    ))}
                </div>
                <div className="mt-6 bg-white rounded-lg shadow p-4 w-[400px]">
                    {selected ? <p>{selected.des}</p> : <p>Hover a Pokémon to see description...</p>}
                </div>
            </div>
        </div>
    )
}

export default Sel