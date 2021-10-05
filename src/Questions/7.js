import React from "react";

class Question7 extends React.Component {
  static getDerivedStateFromProps(props, state) {
    console.log("2. getDerivedFromProps Call :" + props.prop_value);
    return { tmp_state: props.prop_value };
  }

  constructor(props) {
    super(props);
    this.state = {};
    console.log("1. constructor Call");
  }

  // render로 화면에 그려진 뒤에 수행된다. - 이벤트 처리, 초기화 등
  componentDidMount() {
    console.log("4. componentDidMount Call");
    console.log("5. tmp_state :" + this.state.tmp_state);
  }

  render() {
    console.log("3. render Call");
    return <h2>[THIS IS COMPONENTDIDMOUNT FUNCTION]</h2>;
  }
}

export default Question7;
