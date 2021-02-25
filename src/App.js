/* eslint-disable */

import "./App.css";
import react, { Component, useState } from "react";

const App = () => {
  function increase(number) {
    const newPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = number + 10;
        if (result > 10) {
          const error = new Error("에러낫다리");
          return reject(error)
        }
        resolve(result);
      }, 1000);
    });
    return newPromise;
  }

  increase(0)
  .then(number => {
    console.log(number);
    return increase(number)
  })
  .then(number => {
    console.log(number);
    return increase(number)
  })
  .then(number => {
    console.log(number);
    return increase(number)
  })
  .catch(error => {
    console.log(error)
  })

  return (
    <>
      <h1>안녕하세요!</h1>
    </>
  );
};

export default App;
