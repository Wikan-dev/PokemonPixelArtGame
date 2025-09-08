import { useState } from "react"

const Pixel = () => {
    const [color, setColor] = useState(false);
    // console.log(color);

    function changeColor() {
        setColor(true);
        console.log('Color changed to black');
    }

    return (
        <div onMouseEnter={changeColor} className={`${color ? 'bg-black' : 'bg-red-500'} w-100 h-100`}></div>
    )
}

const PixelArt = () => {
    const [hover, setHover] = useState(false);
    const [click, setClick] = useState(false);  

    

    return (
        <div>
            <Pixel />
            <div className="mt-10 flex gap-5">
                <button className={`${hover ? 'bg-white' : 'bg-black'} bg-black text-white w-20 h-10 p-2 font-bold rounded-lg`}>hover</button>
                <button className={`${click ? 'bg-black' : 'bg-white'} text-black w-20 h-10 p-2 outline-2 font-bold rounded-lg`}>click</button>
            </div>
        </div>
    )
}

export default PixelArt;