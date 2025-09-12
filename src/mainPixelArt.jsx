import { useEffect, useState } from "react"
import { Link, useParams, useLocation } from "react-router-dom";
import logo from './assets/pokepixel.png';
import horizon1 from './assets/horizon-1.png'
import horizonGif from './assets/horizonGif.gif';

const Pixel = ({ hover, click, pixelColor, pixels, setPixels}) => {
    // const [color, setColor] = useState(Array(count).fill(false));
    // console.log(color);
    const [changeId, setChangeId] = useState([]);

    function changeColor(i) {
        if (hover == true) {
            setPixels((prev) => prev.map((val, idx) => idx === i ? pixelColor : val));
            console.log('Color changed to black');
        }   else {
            return;
        }

        setChangeId((prev) =>
            prev.includes(i) ? prev : [...prev, i]
        );

        console.log(`Div ${i + 1} berubah jadi warna`)
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
        <div className="flex gap-1 w-[1050px] flex-wrap">
            {pixels.map((color, i) => (
                <div key={i} onClick={() => changeColorClick(i)} onMouseEnter={() => changeColor(i)} className={` outline-1 w-7 h-7`} style={{ backgroundColor : color || 'rgba(0, 0, 0, 100%)'}}></div>
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

const PixelArt = () => {
    const [hover, setHover] = useState(true);
    const [click, setClick] = useState(false);  
    const [pixelCheck, setPixelCheck] = useState(false);
    const [pixelColor, setPixelColor] = useState('');
    const [selectedPokemon, setSetelectedPokemon] = useState(null);
    const [pixels, setPixels] = useState(Array(512).fill('#82c5f28b'));
    const { reff } = useParams();
    const { state } = useLocation();
    // const color = colorReff;
    const imageURl = decodeURIComponent(reff);
    let color = state?.colors || [];
    let pokemon = state?.pokemon || [];

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
        setPixelColor(col);
        setSetelectedPokemon(pokemon[i]);
        console.log("pokemon muncul", pokemon[i]);
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
                setPixelColor(color[num -1]);
            }
        }

        window.addEventListener('keydown', handleMode);
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleMode);
            window.addEventListener('keydown', handleKeyDown);
        }
    }, [hover, click, color]);

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
    return (
        <div className="bg-gray-500 p-5">
            <img src={horizon1} alt="horizon" className="absolute w-full left-0 top-0 z-0" />
            <img src={horizonGif} className="absolute w-full left-0 top-36 h-[80vh] object-cover" alt="" />
            <img src={logo} alt="logo" className="w-50 relative z-10" />
            <img src={reff} alt=""  className="absolute z-30"/>
            <div className="flex flex-row-reverse gap-10 -mt-10 justify-start mr-7 mb-5 z-10 relative">
                <div className=" flex gap-5">
                <button onClick={handleHover} className={`${hover ? 'bg-white text-black' : 'bg-black text-white'} hover:scale-110 bg-black outline-2 w-20 h-10 text-[20px] rounded-lg pixel1`}>hover</button>
                <button onClick={handleClick} className={`${click ? 'bg-white text-black' : 'bg-black text-white'} text-black w-20 h-10 outline-2 text-[20px] rounded-lg pixel1`}>click</button>
                {/* <button onClick={handleReset} className={`bg-red-500 text-white w-20 h-10 p-2  font-bold rounded-lg`}>reset</button> */}
            </div>
            <div className="flex flex-row gap-2">
            {color.map((col, i) => (
                <div key={i} onClick={() => getColor(col)} className="w-10 h-10 outline-2 flex justify-center pt-2 font-bold relative z-20 rounded-sm" style={{ backgroundColor : col, color : col === '#ffffff' ? 'black' : col === '#00000000' ? 'black' : 'white', outline : col === '#00000000' ?  "2px solid black" : '1px solid white'}}>{i +1}
                 {i === 8 && (
                    <div className="absolute w-10 top-5 z-10 h-[2px] bg-red-500 rotate-45"></div>
                 )}
                </div>
            ))}
            {/* <div tabIndex={0} onKeyDown={handleMode} ></div> */}
            </div>
            </div>
            <div className="flex justify-end relative z-20">
                <Pixel hover={hover} click={click} count={512} pixelColor={pixelColor} pixels={pixels} setPixels={setPixels}/>
                {selectedPokemon && (
                    <div>
                        <img src={selectedPokemon} alt="pokemon" />
                    </div>
                )}
            </div>
            {/* <PixelColor pixelColor={'#6912f7ff'}/> */}
        </div>
    )
}

export default PixelArt;