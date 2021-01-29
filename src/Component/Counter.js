import React, { Component } from "react";
import propTypes from "prop-types";

class Counter extends Component {
  state={
      number: 0,
      fixedNumber: 7
  }
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <>
        <h1> 버튼을 누르면 숫자가 증가합니다.</h1> <br />
        <h1>{number}</h1>
        <h1>{fixedNumber}</h1>
        <button
          onClick={() => {
              this.setState({
                  number: number + 1
              }, 
              ()=>{
                  console.log(this.state)
              })
          }}>
          버튼을 눌러보세요!
        </button>
      </>
    );
  }
}

export default Counter;
