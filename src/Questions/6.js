import React from "react";

class Question6 extends React.Component {
  // 컴포넌트가 새로운 props를 받게 되었을때 state를 변경해준다.
  static getDerivedStateFromProps(props, state) {
    console.log("2. getDerivedStateFromProps Call :" + props.prop_value);
    return {};
  }

  constructor(props) {
    super(props);
    this.state = {};
    console.log("1. constructor Call");
  }

  render() {
    console.log("3. render Call");
    return <h2>[THIS IS CONSTRUCTOR FUNCTION]</h2>;
  }
}

export default Question6;
