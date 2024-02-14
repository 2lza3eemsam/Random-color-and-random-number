import React, { useState } from 'react'
import Title from '../Components/Title'

export default function RandomizeColor() {
    const [randomNumber, setRandomNumber] = useState(null)


  const handleSecClick = (e)=> {
    console.log()
    getRandomColor();
    let body=document.querySelector("body");
    body.style.background = getRandomColor();
    e.target.style.backgroundColor = getRandomColor();
    const randomNumber = Math.floor(Math.random() * 256) + 1;
    setRandomNumber(randomNumber)
  };

  function getRandomColor (){
    let letters="0123456789ABCDEF";
    let color="#";
    for (let i=0;i<6;i++){
      color += letters[Math.floor(Math.random()*16)];
    }
    return color;
  }
  return  <div className='container m-auto text-center'>
    


    <Title text={"Random Color and Number"} classes={"mb-4"}/>
 
    <button className='btn btn-danger' onClick={handleSecClick}>Click me</button>
    <button className='btn btn-success' onClick={handleSecClick}>Click me</button>
    <button className='btn btn-primary' onClick={handleSecClick}>Click me</button>
    <button className='btn btn-warning' onClick={handleSecClick}>Click me</button>

    <Title className={"subtitle"} text={!randomNumber? "Random Number" : randomNumber} />
</div>
  
}
