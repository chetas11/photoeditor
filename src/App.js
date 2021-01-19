import React from 'react'
import ReactDOM from 'react-dom'
import MySlider from './Slider'
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

]

export default function App() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-8 text-center">
                    <img className="img-fluid m-3" src="https://picsum.photos/id/870/600/"></img>
                    <MySlider />
                </div>
                <div className="col-lg-4 mt-3 text-center">
                    <button className="btn btn-lg btn-dark">Brightness</button>
                    <button className="btn btn-lg btn-dark">Contrast</button>
                    <button className="btn btn-lg btn-dark">Hue</button>
                </div>
            </div>
        </div> 
    )
}

ReactDOM.render(<App />, document.getElementById('root'))




