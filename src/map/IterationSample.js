import React, { useState } from "react";

const IterationSample = () => {
  const [state, setState] = useState([
    { id: 1, text: "스타벅스" },
    { id: 2, text: "이디야" },
    { id: 3, text: "할리스" },
    { id: 4, text: "투썸플레이스" },
  ]);

  const [input, setInput] = useState('');
  const [stateId, setStateId] = useState(5); 
  const viewState = state.map((name) => <li key={name.id} onDoubleClick={()=>{onRemove(name.id)}}>{name.text}</li>);

  const onChange = (e) => {
    setInput(e.target.value)
    }

  const onClick = () => {
    const nextState = state.concat({
      id: stateId,
      text: input
    })
    setStateId(stateId + 1)
    setState(nextState)
    setInput("")
  }

  const onRemove = id => {
    const nextRemove = state.filter(name => name.id != id)
    setState(nextRemove)
  }
    

  return (
    <>
      <h1>안녕하세요.</h1>
      <ul>{viewState}</ul>

     <ul><input
      name='input'
      placeholder='이름을 입력해주세요'
      value={input}
      onChange={onChange}></input>
      <button onClick={onClick}>목록추가</button>
      <button onClick={onRemove}>목록제거</button>
      </ul>
    </>
  );
};

export default IterationSample;
