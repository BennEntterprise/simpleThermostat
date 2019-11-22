import React, { useContext } from 'react';
import temperatureContext from '../context/TemperatureContext'


const ControlPanel =(props) => {

  const context = useContext(temperatureContext)
  return(
    <div>
      <input type='button' value="Down" onClick={context.adjustTemp}></input>
      <input type='button' value="Up" onClick={context.adjustTemp}></input>
    </div>
  )
  
}

export default ControlPanel;
