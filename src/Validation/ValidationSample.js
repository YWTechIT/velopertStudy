import React, { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {

  state = {
    password: "",
    clicked: false,
    validate: false,
  };

  onChangeHandle = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  onClicked = () => {
    this.setState({
      clicked: true,
      validate: this.state.password === "0000",
    });
    this.input.focus();
  };

  onKeyPress = (e) => {
    if (e.key === "Enter") {
      this.onClicked();
    }
  };

  render() {
    return (
      <div>
        <h1>연습</h1>
        <h1>{this.state.password}</h1>
        <input
          ref={(ref) => (this.input = ref)}
          type='password'
          placeholder="비밀번호를 입력해주세요"
          value={this.state.password}
          onChange={this.onChangeHandle}
          className={
            this.state.clicked
              ? this.state.validate
                ? "success"
                : "failure"
              : ""
          }
          onKeyPress={this.onKeyPress}
        ></input>
        <button onClick={this.onClicked}>Validated</button>
      </div>
    );
  }
}

export default ValidationSample;
