import React from "react";

/*
const Question4 = () => {
  console.log("3. render Call");
  return <h2>[THIS IS RENDER FUNCTION]</h2>;
};
*/

class Question4 extends React.Component {
  // 화면의 내용이 변경되어야하는 시점에 호출된다.
  render() {
    console.log("3. render Call");
    return <h2>[THIS IS RENDER FUNCTION]</h2>;
  }
}

export default Question4;
