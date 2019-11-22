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
    alert("clicked somethinhg")
    console.log(e)
    // this.setState({
    //   temp: 70
    // })
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
