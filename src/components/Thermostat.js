import React from 'react';

class Thermostat extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      temp : this.props.temp
    }
  }

  render(){
      return(
        <div>
          <div id="thermostat">
            <div id="temperature" style={{width: this.state.temp +"%"}}>
              {this.state.temp}
            </div>
          </div>
        </div>
      );
  }
}

export default Thermostat;
