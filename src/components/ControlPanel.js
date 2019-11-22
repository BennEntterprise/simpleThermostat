import React from 'react';

class ControlPanel extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
      <input type='button' value="Down" onClick={this.props.handleClick}></input>
        <input type='button' value="Up" onClick={this.props.handleClick}></input>
      </div>
    )
  }
}

export default ControlPanel;
