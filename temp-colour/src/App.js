import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import { typeImplementation } from '@testing-library/user-event/dist/type/typeImplementation';
import React, {Component,useState} from 'react';
import './App.css';

//state hook to handle state objects

const App=()=> {
  //variable, function,initial valur to be set
  //dynamically apply classes using template stringss
  const [temperatureValue,setTemperatureValue]=useState(69)
  const [tempColour,setTempcolor]=useState("cold")//will reference a css class

  const increaseTemperature=() =>{
    const newTemp=temperatureValue+1;
    if (newTemp >=75){
      setTempcolor("hot")
    }
    setTemperatureValue(newTemp)
  }
  const decreaseTemperature=() =>{
    const newTemp=temperatureValue-1;
    if (newTemp <=67){
      setTempcolor("cold")
    }
    setTemperatureValue(newTemp)
  }
  return (
    <div className="app-container">
      <div className='temperature-display-container'>
        <div className={`temperature-display ${tempColour}` }>{temperatureValue}</div>
      </div>
      <div className="button container">
        <button onClick={()=>increaseTemperature()}>+</button>
        <button onClick={()=>decreaseTemperature()}>-</button>
      </div>
    </div>
  )
}

export default App;
