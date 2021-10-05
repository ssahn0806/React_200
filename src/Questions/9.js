import React from "react";

class Question9 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let jsString1 = "자바스크립트";
    let jsString2 = "입니다\n다음줄 입니다.";
    console.log(jsString1 + " 문자열" + jsString2 + "~");

    let ES6String1 = "ES6";
    let ES6String2 = "입니다.";

    //백틱을 활용해서 한 문장을 나타낼 수 있다.
    console.log(`${ES6String1} 문자열${ES6String2}~~
____다음 줄 입니다.`);

    let LongString = "ES6에 추가된 String 함수들입니다.";

    // 시작 조건, 종료 조건, 포함 조건에 따라 Boolean 반환함
    console.log("startsWith: " + LongString.startsWith("ES6에 추가"));
    console.log("endsWith: " + LongString.endsWith("함수들입니다."));
    console.log("includes: " + LongString.includes("추가된 String"));
  }

  render() {
    return <h2>[THIS IS ES6 STRING]</h2>;
  }
}

export default Question9;
