import React from "react";
import { Experiment, Variant } from "react-optimize";

class AppTestAB extends React.Component {
  render() {
    return (
      <Experiment id="AB">
        <Variant id="0">Original</Variant>
        <Variant id="1">Variant 1</Variant>
        <Variant id="2">Variant 2</Variant>
      </Experiment>
    );
  }
}

export default AppTestAB;
