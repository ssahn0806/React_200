import React from "react";

class Question8 extends React.Component {
  static getDerivedStateFromProps(props, state) {
    console.log("2. getDerivedStateFromProps Call:" + props.prop_value);
    return { tmp_state: props.prop_value };
  }

  constructor(props) {
    super(props);
    this.state = {};
    console.log("1. constructor Call");
  }

  componentDidMount() {
    console.log("4. componentDidMount Call");
    console.log("5. tmp_state :" + this.state.tmp_state);

    // state 변경이 발생함.
    this.setState({ tmp_state2: true });
    console.log(this.props, this.state, "...");
  }

  // state의 변경이 발생하면 수행되는 함수
  shouldComponentUpdate(props, state) {
    console.log(
      "6. shouldComponentUpdate CAll / tmp_state2 = " + state.tmp_state2
    );
    console.log(this.props, this.state, "...");
    console.log(props, state, "...");

    // true false를 반환하며, true를 반환할 경우 render() 재호출이 발생함.
    return state.tmp_state2;
  }

  render() {
    console.log("3. render Call");
    return <h2>[THIS IS shouldComponentUpdate FUNCTION]</h2>;
  }
}

export default Question8;
