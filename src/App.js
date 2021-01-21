import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import MySlider from './Slider'
import Sidebar from './Sidebar'
import './App.css'


const DEFAULT_OPTIONS = [
    {
        name:'Brightness',
        property:'brightness',
        value: 100,
        range: {
            min:0,
            max:200
        },
        unit:'%'
    },
    {
        name:'Contrast',
        property:'contrast',
        value: 100,
        range: {
            min:0,
            max:200
        },
        unit:'%'
    },
    {
        name:'Hue',
        property:'hue',
        value: 0,
        range: {
            min:0,
            max:360
        },
        unit:'deg'
    },
    

]

export default function App() {
    const [SelectedOptionIndex, setSelectedOptionIndex] = useState(0)
    const [options, setOptions] = useState(DEFAULT_OPTIONS)
    const SelectedOption = options[SelectedOptionIndex]
    
    function handleSliderChange({ target }){
        setOptions(prevOptions => {
            return prevOptions.map((option, index)=>{
                if(index!== SelectedOptionIndex) return option
                return {...option, value: target.value}
            })
        })
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-8 text-center">
                    <img className="img-fluid m-3" src="https://picsum.photos/id/870/600/"></img><br />
                    <MySlider
                    min={SelectedOption.range.min}
                    max={SelectedOption.range.max}
                    value={SelectedOption.value}
                    handleChange={handleSliderChange}
                    />
                </div>
                <div className="col-lg-4 mt-3 text-center">
                    {options.map((option, index)=> {
                    return(
                        <Sidebar key={index} 
                        name={option.name}
                        active={index===SelectedOptionIndex}
                        handleClick={()=>setSelectedOptionIndex(index)}
                         />
                    )
                    })}
                </div>
            </div>
        </div> 
    )
}

ReactDOM.render(<App />, document.getElementById('root'))




