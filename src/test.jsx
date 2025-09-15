import data from './data/pokemon.json'
import { Link } from 'react-router-dom'
import { useState } from 'react';

const Test = ({onSelectPokemon}) => {
    const [selected, setSelected] = useState(null)
    return (
        <div>
            <div className='bg-black/70 absolute z-50 left-0 w-full h-[100vh] top-0'>
                <div className="absolute flex flex-col mt-34 items-center justify-center gap-10 mx-128">
                    <div className='flex flex-row'>
                        {data.pokemons.map((poke, idx) => (
                        <div onClick={() => onSelectPokemon(poke)} key={idx} className="flex items-center cursor-pointer mx-[-30px] w-53" onMouseEnter={() => setSelected(poke)} onMouseLeave={() => setSelected(null)}>
                            <Link to='/pixel-art' state={{ pokemonId: idx,color: poke.colour, pokemon: poke["Pokemon-colour"]}} ><img src={poke.image} className="w-28 h-auto  opacity-50 hover:opacity-100"/></Link>
                        </div>
                        ))}
                    </div>
                    <div className="text-outline pixel1 text-[22px] text-white mt-6 bg-[#333333] rounded-l-lg p-4 w-[412px] min-h-[189px] mr-65">
                        <img src="/public/Yapping.png" alt="Pfor tolkien" className="absolute ml-99 mt-[-16px]" />
                        {selected ? <p className="w-90 text-justify">{selected.des}</p> : <p className="w-90 text-justify">Venture above to shift thy creature, take heart! Thine deeds shall be preserved upon thy return.</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Test