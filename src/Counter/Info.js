import React, { useEffect, useReducer, useState } from "react";


function reducer(state, action){
  return {
    ...state,
    [action.name]: action.value
  }
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: ''
  })

  const { name, nickname } = state;

  const onChange = e => {
    dispatch(e.target)
  }
  return (
    <>
      <input
      name='name'
      value={name}
      onChange={onChange}></input>

      <input
      name='nickname'
      value={nickname}
      onChange={onChange}></input>

      <h1>이름: {name}</h1>
      <h1>닉네임: {nickname}</h1>
    </>

    
  );
};

export default Info;
