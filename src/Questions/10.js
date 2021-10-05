import React from "react";

class Question10 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // 재선언, 재할당이 가능함
    var varName = "react";
    console.log("varName1 :" + varName);
    var varName = "200";
    console.log("varName2 :" + varName);

    // 재선언을 허용하지 않음
    let letName = "react";
    console.log("letName1 :" + letName);
    // let letName = "200"; // letName has already been declared

    // 재할당은 허용함
    letName = "200";
    console.log("letName2 :" + letName);

    // 재선언 재할당 모두 불가능함
    const constName = "react";
    console.log("constName :" + constName);
    // const constName = "200"; // constName has already been declared
    // constName = "200"; // Assignment to constant variable
  }

  render() {
    return <h2>[THIS IS Variable]</h2>;
  }
}

export default Question10;
