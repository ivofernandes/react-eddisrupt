import React from "react";
import { render } from "react-dom";

/*
function Lamp() {
  return <div>Lamp!</div>
}
*/

class Lamp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOn: false
    };
  }

  render() {
    return <div>Lamp!</div>;
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
