import React from 'react';

import './App.css';
import Thermostat from './components/Thermostat';
import ControlPanel from './components/ControlPanel'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      temp: 70
    }
  }
  adjustTemp = (e) => {
    console.log(e.target.value)
    switch(e.target.value){
      case 'Down': 
        return this.setState({temp: this.state.temp -1}); 
      case 'Up': 
        return this.setState({temp: this.state.temp + 1})
      default: 
        return;
    }
  }

  

  render(){
    return (
      <div className="App">
        <Thermostat temp= { this.state.temp } />
        <ControlPanel alterTemp={ this.adjustTemp }/>
      </div>
    );
  }
}

export default App;
