import React, { useState } from "react";

const EventHandlingFunction = () => {
  const [form, setForm] = useState({
      message: '',
      username: ''
  });

  const {message, username} = form;

  const onChange = (e) => {
      const nextForm = {
          ...form,
          [e.target.name]: e.target.value
        }
        setForm(nextForm)
  }

  const onClick = () => {
    alert(username + " , " + message);
    setForm({
      message: "message",
      username: "username",
    });
  };

  const onKeyPress = e => {
      if(e.key === 'Enter'){
          onClick();
      }
  }

  return (
    <div>
      <h1>{message}</h1>
      <input
        name="message"
        placeholder="message입니다."
        value={message}
        onChange={onChange}
      ></input>
      <br />
      <br />
      <button onClick={onClick}>버튼을 눌러주세요?</button>

      <h1>{username}</h1>
      <input
        name="username"
        placeholder="username입니다."
        value={username}
        onChange={onChange}
        onKeyPress={onKeyPress}
      ></input>
      <br />
      <br />
      <button
        onClick={() => {
          alert(username);
        }}
      >
        버튼을 눌러주세요?
      </button>
    </div>
  );
};

export default EventHandlingFunction;
