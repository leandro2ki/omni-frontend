import React from "react";
import { Experiment, Variant } from "react-optimize";
// import { Experiment, Variant } from "react-google-optimize";

class AppTestAB extends React.Component {
  render() {
    return (
      <Experiment id="hCn01RZ1S7yfYQS2U36b-A">
        <Variant id="0">Original</Variant>
        <Variant id="1">Variant 1</Variant>
        <Variant id="2">Variant 2</Variant>
      </Experiment>

      // <Experiment name="AB">
      //   <Variant default id="0">
      //     Default variant
      //   </Variant>
      //   <Variant id="1">Variant 1</Variant>
      //   <Variant id="2">Variant 2</Variant>
      // </Experiment>
    );
  }
}

export default AppTestAB;
