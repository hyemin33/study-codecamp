import { Component } from "react";
import Router from "next/router";

interface IPrevState {
  count: number;
}

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  conponentDidMount() {
    console.log("그려지고 나서 실행!");
  }

  componenentDidUpdate() {
    console.log("변경되고 나서 실행!");
  }

  conponentWillUnmount() {
    console.log("사라질때 실행!");
  }

  onClickCountUp = () => {
    this.setState((prevState: IPrevState) => ({ count: prevState.count + 1 }));
  };

  onClickMove() {
    void Router.push("/");
  }

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>카운트 올리기</button>
        <button onClick={this.onClickMove}>나가기</button>
      </>
    );
  }
}

// class AAAA {
//     powr = 50
//     attack(){

//     }
// }

// class BBB extends AAA{ => 상속됨
//     runt(){

//     }
// }

// const mybbb = new BB()
// mybbb.
