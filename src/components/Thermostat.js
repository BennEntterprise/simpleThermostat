import React from 'react';

class Thermostat extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
      return(
        <div>
          <div id="thermostat">
            <div id="temperature" style={{width: this.props.temp +"%"}}>
              {this.props.temp}
            </div>
          </div>
        </div>
      );
  }
}

export default Thermostat;
