import React, {useState} from 'react';
// import on from './on.png';
import './Room1.css';


function Room1() {
    let[isLit,setLit]=useState(true);
    let[temperature,setTemperature]=useState(72);
    function Lit()
    {
        console.log("Button Clicked");
        setLit(true);
        setTemperature(72);
    }
    function Dark()
    {
        console.log("Button Clicked");
        setLit(false);
        setTemperature(65);
    }
    const increaseTemperature=()=>{
        console.log("Increase Age Button Clicked");
        setTemperature(++temperature);
    }
    const decreaseTemperature=()=>{
        setTemperature(--temperature);
    }
    function updateLit()
    {
        console.log("Button Clicked");
        setLit(!isLit);
        setTemperature(`${isLit? "65":"72"}`);
    }
    return (
    <div className={`room ${isLit?"lit":"dark"}`}>
        <br></br>
    <h1>This Room is : {isLit?"lit":"dark"}<br></br></h1>
    <br></br>
    <button onClick={Lit} >ON</button>&nbsp;&nbsp;
    <button onClick={Dark} >OFF</button>&nbsp;&nbsp;
    <button onClick={updateLit}>Toggle</button>
    <br></br>
    <h1>Temperature : {temperature} Fahrenheit  / {(temperature - 32) * 5/9} Celcius</h1>
    <button onClick={increaseTemperature}>+</button>&nbsp;
    <button onClick={decreaseTemperature}>-</button>
    </div>
  );
}

export default Room1;
