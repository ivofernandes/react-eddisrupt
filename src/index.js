import React from "react";
import { render } from "react-dom";

function LampState(props){
  return (
    <span>{props.isOn ? 'ON' : 'OFF'}</span>
  )
}

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
        Lamp is <LampState isOn={this.state.isOn }/> <br/>
        it was initally <LampState isOn={this.props.isOn} />
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
