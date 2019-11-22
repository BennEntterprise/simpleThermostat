import React, { useReducer } from 'react';

import './App.css';

//Context/State Related items
import TemperatureContext from './context/TemperatureContext'
import temperatureReducer from './context/temperatureReducer'
import { INCREASE_TEMP, DECREASE_TEMP, UPDATE_DELTA } from './context/types'

//Components
import Thermostat from './components/Thermostat';
import ControlPanel from './components/ControlPanel'
import DeltaSetting from './components/DeltaSetting'

const App = (props) => {

  const initialState = {
    temp: 50
  }

  const increaseTemp = (delta) => {
    console.log('inside increase temp')
    dispatch({
      type: INCREASE_TEMP, 
      payload: delta
    })
  }

  const decreaseTemp = (delta) => {
    console.log('inside decrease temp')
    dispatch({
      type: DECREASE_TEMP, 
      payload: delta
    })
  }

  const updateDelta = (e) => {
    dispatch({
      type: UPDATE_DELTA, 
      payload: parseInt(e.target.value)
    })
  }

  const [state, dispatch] = useReducer(temperatureReducer, initialState)

  const adjustTemp = (e) => {
    let delta = parseInt(state.delta)
    switch(e.target.value){
      case 'Down': 
        return decreaseTemp(-1 *delta)
      case 'Up': 
        return increaseTemp(delta)
      default: 
        return;
    }
  }



  return (
    <div className="App">
      <TemperatureContext.Provider
        value={{
          temp: state.temp, 
          delta: 5,
          adjustTemp, 
          updateDelta
        }}
      >
        <Thermostat  />
        <ControlPanel />
        <DeltaSetting />
      </TemperatureContext.Provider>
    </div>
  );
}

export default App;
