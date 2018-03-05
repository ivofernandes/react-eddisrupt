import React from "react";
import { render } from "react-dom";

class Lamp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOn: false
    };
  }

  render() {
    const styles = this.state.isOn ? 'lamp lamp--on' : 'lamp';
    return <div className={styles}>Lamp!</div>;
  }
}

function App(props) {
  return [props.children];
}

render(
  <App>
    <Lamp />
  </App>,
  document.getElementById("root")
);
