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
    return <div className='lamp'>Lamp!</div>;
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
