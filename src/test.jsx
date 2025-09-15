import data from './data/pokemon.json'
import { Link } from 'react-router-dom'

const Test = ({onSelectPokemon}) => {
    return (
        <div className='flex mx-auto'>
            {data.pokemons.map((poke, idx) => (
                    <div onClick={() => onSelectPokemon(poke)} key={idx} className="flex flex-col items-center cursor-pointer" onMouseEnter={() => setSelected(poke)} onMouseLeave={() => setSelected(null)}>
                        <Link to='/pixel-art' state={{ pokemonId: idx,color: poke.colour, pokemon: poke["Pokemon-colour"]}} ><img src={poke.image} alt={`Pokemon ${idx}`} className="w-28 h-auto  opacity-50 hover:opacity-100"/></Link>
                    </div>
                    ))}
        </div>
    )
}

export default Test