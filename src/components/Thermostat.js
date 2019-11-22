import React from 'react';

const Thermostat = (props) => {
 
  return(
    <div>
      <div id="thermostat">
        <div id="temperature" style={{width: props.temp +"%"}}>
          {props.temp}
        </div>
      </div>
    </div>
  );
  
}

export default Thermostat;
