import { useEffect, useState } from "react"

const Pixel = ({ hover, click, pixelColor, pixels, setPixels}) => {
    // const [color, setColor] = useState(Array(count).fill(false));
    const bg = 'bg-black';
    // console.log(color);

    function changeColor(i) {
        if (hover == true) {
            setPixels((prev) => prev.map((val, idx) => idx === i ? pixelColor : val));
            console.log('Color changed to black');
        }   else {
            return;
        }
    }

    function changeColorClick(i) {
        if (click == true) {
            setPixels((prev) => prev.map((val, idx) => idx === i ? pixelColor : val));
            console.log('Color changed to black');
        } else {
            return;
        }
    }

    

    return (
        <div className="flex gap-1 w-195 flex-wrap">
            {pixels.map((color, i) => (
                <div key={i} onClick={() => changeColorClick(i)} onMouseEnter={() => changeColor(i)} className={` outline-1 w-5 h-5`} style={{ backgroundColor : color ? pixelColor : 'rgba(0, 0, 0, 20%)'}}></div>
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
    const [pixelColor, setPixelColor] = useState('');
    const [pixels, setPixels] = useState(Array(512).fill(''));
    const color = ["#000000", "#ffffff", "#82c6f2", "#b2c6d9", "#ffb545", "#cf8b57", "#80806a", "#80806a"];

    function handleHover() {
        if (hover != true) {
            setHover(true);
            setClick(false);
        } else if (hover == true) {
            console.log('hover is already true');
            return;
        }
    }

    function getColor(col) {
        // const selectedColor = JSON.stringify(color);
        setPixelColor(col);
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
        setPixels(Array(512).fill(''));
    }

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
    return (
        <div>
            <Pixel hover={hover} click={click} count={512} pixelColor={pixelColor} pixels={pixels} setPixels={setPixels}/>
            {/* <PixelColor pixelColor={'#6912f7ff'}/> */}
            <div className="flex gap-10">
            {color.map((col, i) => (
                <div key={i} onClick={() => getColor(col)} className="w-10 h-10 outline-2" style={{ backgroundColor : col}}></div>
            ))}
            </div>
            <div className="mt-10 flex gap-5">
                <button onClick={handleHover} className={`${hover ? 'bg-white text-black' : 'bg-black text-white'} hover:scale-110 bg-black outline-2 w-20 h-10 p-2 font-bold rounded-lg`}>hover</button>
                <button onClick={handleClick} className={`${click ? 'bg-white text-black' : 'bg-black text-white'} text-black w-20 h-10 p-2 outline-2 font-bold rounded-lg`}>click</button>
                <button onClick={handleReset} className={`bg-red-500 text-white w-20 h-10 p-2 outline-2 font-bold rounded-lg`}>reset</button>
            </div>
        </div>
    )
}

export default PixelArt;