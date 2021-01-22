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
        property:'hue-rotate',
        value: 0,
        range: {
            min:0,
            max:360
        },
        unit:'deg'
    },
    {
        name:'Saturation',
        property:'saturate',
        value: 100,
        range: {
            min:0,
            max:200
        },
        unit:'%'
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

    function getImageStyle(){
        const filters = options.map(option => {
            return `${option.property}(${option.value}${option.unit})`
        })

        return{ filter: filters.join(' ')}
    }

    return (
        <div className="container-fluid">
            <div className="row mt-5">
                <div className="col-lg-8 col-md-8 col-sm-6 text-center">
                    <img style={getImageStyle()} className="img-fluid" src="https://picsum.photos/id/870/600/"></img><br />
                    <MySlider
                    min={SelectedOption.range.min}
                    max={SelectedOption.range.max}
                    value={SelectedOption.value}
                    handleChange={handleSliderChange}
                    />
                    <p>{SelectedOption.value}</p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 text-center">
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




