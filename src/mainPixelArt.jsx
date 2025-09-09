import { useEffect, useState } from "react"

const Pixel = ({ hover, click, count}) => {
    const [color, setColor] = useState(Array(count).fill(false));
    // console.log(color);

    function changeColor(i) {
        if (hover == true) {
            setColor((prev) => prev.map((val, idx) => idx === i ? true : val));
            console.log('Color changed to black');
        }   else {
            return;
        }
    }

    function changeColorClick(i) {
        if (click == true) {
            setColor((prev) => prev.map((val, idx) => idx === i ? true : val));
            console.log('Color changed to black');
        } else {
            return;
        }
    }

    return (
        <div className="flex gap-1 w-200 flex-wrap">
            {Array.from({ length: count}).map((_, i) => (
                <div key={i} onClick={() => changeColoraClick(i)} onMouseEnter={() => changeColor(i)} className={`${color[i] ? 'bg-black' : 'bg-white'} outline-1 w-5 h-5`}></div>
            ))}
        </div>
    )
}

const PixelArt = () => {
    const [hover, setHover] = useState(true);
    const [click, setClick] = useState(false);  

    function handleHover() {
        if (hover != true) {
            setHover(true);
            setClick(false);
        } else if (hover == true) {
            console.log('hover is already true');
            return;
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
            <Pixel hover={hover} click={click} count={512}/>
            <div className="mt-10 flex gap-5">
                <button onClick={handleHover} className={`${hover ? 'bg-white text-black' : 'bg-black text-white'} bg-black outline-2 w-20 h-10 p-2 font-bold rounded-lg`}>hover</button>
                <button onClick={handleClick} className={`${click ? 'bg-white text-black' : 'bg-black text-white'} text-black w-20 h-10 p-2 outline-2 font-bold rounded-lg`}>click</button>
            </div>
        </div>
    )
}

export default PixelArt;