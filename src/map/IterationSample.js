import React, { useState } from "react";

const IterationSample = () => {
  const [input, setInput] = useState("");
  const [names, setNames] = useState([
    { id: 1, text: "안기원" },
    { id: 2, text: "김윤정" },
    { id: 3, text: "안영우" },
    { id: 4, text: "안영주" },
  ]);
  const [nextId, setNextId] = useState(5);

  const nameList = names.map((name) => <li key={name.id} onDoubleClick={()=> onRemove(name.id)}>{name.text}</li>);

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onClick = () => {
    const nextName = names.concat({
      id: nextId,
      text: input,
    });
    setNames(nextName);
    setNextId(nextId + 1);
    setInput("");
  };

  const onRemove = id => {
    const onFilter = names.filter(name => name.id !== id)
    setNames(onFilter)
  }

  const onKeyUp = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <>
      <h1>
        <ul>{nameList}</ul>
      </h1>
      <br /> <br />
      <ul>
        <h1>{input}</h1>
      </ul>
      <ul>
        <input
          type="string"
          value={input}
          onChange={onChange}
          placeholder="추가할 내용을 적어주세요"
          onKeyUp={onKeyUp}
        ></input>
        <button onClick={onClick}>추가</button>
        <button onClick={onRemove}>삭제</button>
      </ul>
    </>
  );
};

export default IterationSample;
