import React, { useCallback, useMemo, useRef, useState } from "react";

const getAverage = numbers => {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b) => a+b)
    return sum / numbers.length
}

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputE1 = useRef(null);

  const onChange = useCallback(e => {
      setNumber(e.target.value)
  }, [])

  const onInsert = useCallback(() => {
      const nextList = list.concat(number)
      setList(nextList)
      setNumber('')
      inputE1.current.focus()
  }, [number, list])
  

  const avg = useMemo(() => getAverage(list), [list]);
  return (
    <div>
      <input value={number} onChange={onChange} ref={inputE1}></input>

      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>

      <h1>{list}</h1>
      <h1>{number}</h1>

      <b>평균값: {avg}</b>
    </div>
  );
};

export default Average;
