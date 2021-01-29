import React, { Component } from "react";
import propTypes from 'prop-types';

class MyComponent extends Component {
  static defaultProps = {
    name: '기본이름',
    myFavoriteNumber: 7
  }
  static propTypes ={
    name: propTypes.string,
    myFavoriteNumber: propTypes.number.isRequired
  }
  render(){
    const {name, myFavoriteNumber} = this.props;
    return(
      <h1>
        안녕하세요. 제 이름은 {name}입니다. <br/>
        제가 좋아하는 숫자는 {myFavoriteNumber}이구요.
      </h1>
    )
  }
}
export default MyComponent;
