import React from 'react'


export default function MySlider({min, max, value, handleChange}) {
    return (
    <div className="slidecontainer">
    <input className="slider" type="range"  min={min} max={max} value={value} onChange={handleChange} id="myRange"></input>
    </div>
    )
}
