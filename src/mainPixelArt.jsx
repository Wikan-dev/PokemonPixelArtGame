import { useEffect, useState } from "react"
import { Link, useParams, useLocation } from "react-router-dom";
import logo from './assets/pokepixel.png';
import horizon1 from './assets/horizon-1.png'
import horizonGif from './assets/horizonGif.gif';
import ball from './assets/ball.svg';
import data from './data/pokemon.json';
import Test from "./test";

const Pixel = ({ hover, click, pixelColor, pixels, setPixels}) => {
    // const [color, setColor] = useState(Array(count).fill(false));
    // console.log(color);
    const [changeId, setChangeId] = useState([]);

    function changeColor(i) {
        if (hover == true) {
            setPixels((prev) => prev.map((val, idx) => idx === i ? pixelColor : val));
            // console.log('Color changed to black');
            
        }   else {
            return;
        }

        setChangeId((prev) =>
            prev.includes(i) ? prev : [...prev, i]
        );

        // console.log(`Div ${i + 1} berubah jadi warna`)
    }

    function changeColorClick(i) {
        if (click == true) {
            setPixels((prev) => prev.map((val, idx) => idx === i ? pixelColor : val));
            // console.log('Color changed to black');
        } else {
            return;
        }

        setChangeId((prev) =>
            prev.includes(i) ? prev : [...prev, i]
        );

        // console.log(`Div ${i + 1} berubah jadi warna`)
    }

    

    return (
        <div className="flex gap-[3px] w-[1000px] flex-wrap">
            {pixels.map((color, i) => (
                <div key={i} onClick={() => changeColorClick(i)} onMouseEnter={() => changeColor(i)} className={` outline-1 outline-color-[#82c5f28b] w-7 h-7 cursor-pointer`} style={{ backgroundColor : color || 'rgba(0, 0, 0, 100%)'}}></div>
            ))}
        </div>
    )
}

// const PixelColor = ({ pixelColor }) => {
//     console.log(pixelColor);
//     return (
//         <div>
//             <div style={{ backgroundColor : pixelColor}} className={`w-100 h-100`}></div>
//         </div>
//     )
// }

const PokeBall = () => {
    return (
        <div>
            <img src={ball} alt="balls" />
        </div>
    )
}


const PixelArt = () => {
    const { state } = useLocation();
    const [hover, setHover] = useState(true);
    const [click, setClick] = useState(false);  
    const [pixels, setPixels] = useState(Array(512).fill('#82c5f28b'));
    const [targetPixels, setTargetPixels] = useState([]);
    const [pickPokemon, setPickPokemon] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const initialPokemonId = state?.pokemonId || 0;
    const [selectedId, setSelectedId] = useState(initialPokemonId);
    // const [pixelCheck, setPixelCheck] = useState(false);
    // const [isCompleted, setIsCompleted] = useState(false);
    const { reff } = useParams();
    // const color = colorReff;
    const imageURl = decodeURIComponent(reff);
    let color = state?.color || [];
    let pokemon = state?.pokemon ?? [];
    const [pixelColor, setPixelColor] = useState(color[0] || '');
    const [pokemonColour, setPokemonColour] = useState(pokemon || []);
    const selectedPokemon = pokemonColour[currentIndex] || null;
    // const [selectedPokemon, setSelectedPokemon] = useState(pokemon[0] || null);

    function handleHover() {
        if (hover != true) {
            setHover(true);
            setClick(false);
        } else if (hover == true) {
            console.log('hover is already true');
            return;
        }
    }

    function getColor(col, i) {
        // const selectedColor = JSON.stringify(color);
        if (col !== '#00000000') {
            setPixelColor(col);
            setSelectedPokemon(pokemon[i]);
            console.log("pokemon muncul", pokemon[i]);
        }
    }

    function handleClick() {
        if (click != true) {
            setClick(true);
            setHover(false);
        } else if (click == true) {
            console.log('click is already true');
            return;
        }
    }

    function handleReset() {
        setPixels(Array(512).fill('#82c5f28b'));
    }

    useEffect(() => {
        const handleMode = (e) => {
            if (e.code === 'Space') {
                console.log('Space key pressed');
                setHover(!hover);
                setClick(!click);
            } else if (e.code === 'KeyR') {
                console.log('R key pressed');
                handleReset();
            }
        }

        function handleKeyDown(e) {
            const num = parseInt(e.key, 10);
            if (!isNaN(num) && num > 0 <= color.length) {
                const selectedColor = color[num - 1];
                setPixelColor(selectedColor);
                
                if (selectedColor !== '#00000000') {
                    setSelectedPokemon(pokemon[num -1]);
                }
                
            }
        }

        if (state?.image) {
            getImagePixels(state.image, 32, 16).then((px) => {
                setTargetPixels(px);
            })
        }

        if (state) {
            setSelectedId(state.pokemonId ?? 0);
            setPokemonColour(state.pokemon ?? []);
            // setPixelColor(state.color?.[0] ?? '')
        }

        if (targetPixels.length > 0) {
            const done = pixels.every((px, i) => px === targetPixels[i]);
            setIsCompleted(done);
            if (done) {
                console.log("gambar sudah selesai")
            }
        }

        window.addEventListener('keydown', handleMode);
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleMode);
            window.removeEventListener('keydown', handleKeyDown);
        }   
    }, [hover, click, color, pokemon, state, pixels, targetPixels]);

    // useEffect(() => {
    //     // console.log('Hover state changed:', hover);
    //     if (hover == true) {
    //         setClick(false);
    //         // console.log("hover is: " + hover);
    //         // console.log("click is: " + click);
    //     } else if (click == true) {
    //         setHover(false);
    //         // console.log("hover is: " + hover);
    //         // console.log("click is: " + click);
    //     }
    // }, [hover, click]);
    // console.log(colorReff);

//     console.log("selectedPokemon path:", selectedPokemon);
// console.log("Final src:", `${import.meta.env.BASE_URL}${selectedPokemon}`);

    function getImagePixels(imgSrc, width, height) {
        return new Promise((resolve) => {
            const img  = new Image();
            img.src = imgSrc;
            img.crossOrigin = "Annonymus";

            img.onload = () => {
                const canvas = document.createElement("canvas");
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, width, height);

                const imageData = ctx.getImageData(0, 0, width, height).data;
                const pixels = [];

                for (let i = 0; i < imageData.length; i += 4) {
                    const r = imageData[i].toString(16).padStart(2, "0");
                    const g = imageData[i + 1].toString(16).padStart(2, "0");
                    const b = imageData[i + 2].toString(16).padStart(2, "0");
                    const a = imageData[i + 3] / 255;
                    
                    if (a === 0)  {
                        pixels.push("#00000000");
                    } else {
                        pixels.push(`#${r}${g}${b}`)
                    }
                }
                resolve(pixels);
            }
        })
    }
    
    return (
        <div className="bg-gray-500 p-5 relative">
            {pickPokemon ? (
                <div className="">
                    <Test onSelectPokemon={(poke) => {
                        setPokemonColour(poke['Pokemon-colour']);
                        setCurrentIndex(0);
                        setPickPokemon(false);
                        handleReset();
                    }} />
                </div>
            ) : null}

            <img src={horizon1} alt="horizon" className="absolute w-full left-0 top-0 z-0" />
            <img src={horizonGif} className="absolute w-full left-0 top-[146px] h-[80vh] object-cover" alt="" />
            <Link to='/' className="relative z-20"><img src={logo} alt="logo" className="w-50 relative z-10" /></Link>
            {/* <img src={reff} alt=""  className="absolute z-30"/> */}
            <div className="flex flex-row-reverse gap-10 -mt-10 justify-start mr-7 mb-5 z-10 relative">
                <div className=" flex flex-col">
                    <h1 className="pixel1 text-[30px]">Mode Space Bar</h1>
                    <div className="flex-row flex gap-5 ">
                        <button onClick={handleHover} className={`${hover ? 'bg-white text-black' : 'bg-black text-white'} hover:scale-110 bg-black outline-2 w-20 h-10 text-[20px] rounded-lg pixel1`}>hover</button>
                    <button onClick={handleClick} className={`${click ? 'bg-white text-black' : 'bg-black text-white'} text-black w-20 h-10 outline-2 text-[20px] rounded-lg pixel1`}>click</button>
                    </div>
                    {/* <button onClick={handleReset} className={`bg-red-500 text-white w-20 h-10 p-2  font-bold rounded-lg`}>reset</button> */}
            </div>
            <div>
                <h1 className="pixel1 text-[30px]">Color number keys</h1>
                <div className="flex flex-row gap-2">
            {color.map((col, i) => (
                <div key={i} onClick={() => getColor(col, i)} className="w-10 h-10 outline-2 flex justify-center pt-2 font-bold relative z-20 rounded-sm" style={{ backgroundColor : col, color : col === '#ffffff' ? 'black' : col === '#00000000' ? 'black' : 'white', outline : col === '#00000000' ?  "2px solid black" : '1px solid white'}}>{i +1}
                 {i === 8 && (
                     <div className="absolute w-10 top-5 z-10 h-[2px] bg-red-500 rotate-45"></div>
                    )}
                </div>
            ))}
            {/* <div tabIndex={0} onKeyDown={handleMode} ></div> */}
            </div>
            </div>
                    <h1 className="pixel1 text-[20px] relative top-15">R to reset</h1>
            <div className="mr-4">
                <h1 className="pixel1 text-[30px] ">Magmemite</h1>
                <div className=" flex  h-10">
                {data.pokemons.map((item, idx) => (
                    <div key={item.id} className={`${selectedId === idx ? 'opacity-100' : 'opacity-50'}`} onClick={() => {setPickPokemon(true); setSelectedId(item.id)}}>
                        <PokeBall />
                    </div>
                ))}
            </div>
            </div>
            </div>
            <div className="flex justify-between relative z-20 flex-row-reverse ">
                <Pixel hover={hover} click={click} count={512} pixelColor={pixelColor} pixels={pixels} setPixels={setPixels}/>
                {selectedPokemon && (
                    <div>
                        <img src={`${import.meta.env.BASE_URL}${selectedPokemon.replace(/^\//, '')}`} alt="pokemon" className="w-100 relative top-30 animate-move" />
                    </div>
                )}
            </div>
            {/* <PixelColor pixelColor={'#6912f7ff'}/> */}

            <button className="pixel1 absolute z-20 bg-white w-30 h-10 right-7 mt-5 ">fly pokemon</button>
        </div>
    )
}

export default PixelArt;