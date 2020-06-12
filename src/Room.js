import React, {useState} from 'react';
// import on from './on.png';
import './Room.css';


function Room() {
    let[isLit,setLit]=useState(true);
    let[age,setAge]=useState(23);
    function updateLit()
    {
        console.log("Button Clicked");
        setLit(!isLit);
    }
    const increaseAge=()=>{
        console.log("Increase Age Button Clicked");
        setAge(++age);
    }
    return (
    <div className={`room ${isLit?"lit":"dark"}`}>
    This Room is : {isLit?"lit":"dark"}<br></br>
    <br></br>
    <button onClick={updateLit} className={isLit? "litbtn": "darkbtn"}></button>
    </div>
  );
}

export default Room;
