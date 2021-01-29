import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    messages: "",
  };

//   constructor(props){
//       super(props)
//       this.handleChange = this.handleChange.bind(this)
//       this.handleClick = this.handleClick.bind(this)
//   }

  handleChange = (e) => {
      this.setState({
          messages: e.target.value
      })
  }

  handleClick = () => {
      alert(this.target.value)
      this.setState({
          messages: ''
      })
  }

  render() {
    return (
      <div>
        <h1> 이벤트 연습 중</h1>
        <input
          type="text"
          placeholder=" 적어주세요 "
          value={this.state.messages}
          onChange={this.handleChange}></input>



        <button onClick={this.handleClick}>버튼을 눌러주세요</button>
      </div>
    );
  }
}

export default EventPractice;
