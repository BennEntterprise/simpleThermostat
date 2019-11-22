import React, { useContext } from 'react';
import temperatureContext from '../context/TemperatureContext'

const Thermostat = (props) => {
 const context = useContext(temperatureContext)
  return(
    <div>
      <div id="thermostat">
        <div id="temperature" style={{width: context.temp +"%"}}>
          {context.temp}
        </div>
      </div>
    </div>
  );
  
}

export default Thermostat;
