import React from "react";

class Question5 extends React.Component {
  // 생명주기 함수 중에서 가장먼저 실행되며, 처음 한번만 호출된다.
  // state 변수 선언 및 부모 객체로부터 전달받은 props를 초기화할 떄 사용함.
  // super는 함수 최상단에서 호출해야함.
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

export default Question5;
