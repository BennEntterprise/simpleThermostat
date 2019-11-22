import React from 'react';

const ControlPanel =(props) => {

  const {alterTemp} = props
  return(
    <div>
    <input type='button' value="Down" onClick={alterTemp}></input>
      <input type='button' value="Up" onClick={alterTemp}></input>
    </div>
  )
  
}

export default ControlPanel;
