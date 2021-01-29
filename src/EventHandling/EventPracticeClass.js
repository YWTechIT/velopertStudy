import React, { Component } from "react";

class EventPracticeClass extends Component {
  state = {
    message: " ",
    username: " ",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
      alert(`${this.state.message} : ${this.state.username}`)
      this.setState({
          message: 'message 초기화',
          username: 'username 초기화'
      })
  }

  handleKeyPress = (e) => {
      if(e.key === 'Enter'){
          this.handleClick();
      }
  }

  render() {
    return (
      <div>
        <h1> 안녕하세요 이 창은 Input값이 2개 입니다. 신기하지요?</h1>
        <h1>{this.state.message}</h1>
        <input
          type="text"
          name="message"
          placeholder="name is message"
          value={this.state.message}
          onChange={this.handleChange}
        ></input>{" "}
        <br />
        <br />
        <button
          onClick={this.handleClick}
        >
          message 버튼
        </button>
        <br />
        <br />
        <h1>{this.state.username}</h1>
        <input
          type="text"
          name="username"
          placeholder="name is username"
          value={this.state.username}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        ></input>
        <br />
        <br />
        <button onClick={this.handleClick}>username 버튼</button>
      </div>
    );
  }
}

export default EventPracticeClass;
