import React from 'react'


export default function MySlider({min, max, value, handleChange}) {
    return (
    <>
    <input type="range" min={min} max={max} value={value} onChange={handleChange}></input>
    </>
    )
}
