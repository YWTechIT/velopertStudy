import React, { Component } from "react";

class ScrollBox extends Component {

    scrollToBottom = () => {
        const scrollHeight = this.box.scrollHeight;
        const clientHeight = this.box.clientHeight;

        this.box.scrollTop = scrollHeight - clientHeight;
    }
  render() {
    const style = {
      border: "1px solid black",
      height: "400px",
      width: "1000px",
      overflow: "auto",
      position: "relative",
    };

    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white, blue)",
    };

    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref}}>
        <div style={innerStyle}></div>
      </div>
    );
  }
}

export default ScrollBox;
