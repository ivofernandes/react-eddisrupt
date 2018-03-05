import React from "react";
import { render } from "react-dom";

class Lamp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOn: props.isOn
    };
  }

  onLampClick =() => {
    //this.state.isOn = !this.state.isOn;
    this.setState({
      isOn: !this.state.isOn
    });
  }

  render() {
    const styles = this.state.isOn 
    ? 'lamp lamp--on' 
    : 'lamp';
    
    return( 
      <div className={styles} onClick={this.onLampClick} >
        Lamp is {this.state.isOn ? 'ON' : 'OFF'} <br/>
        inital state {this.props.isOn ? 'ON' : 'OFF'}
      </div>);
  }
}

function App(props) {
  return [props.children];
}

render(
  <App>
    <Lamp isOn/>
    <Lamp />
  </App>,
  document.getElementById("root")
);
