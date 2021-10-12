import React from 'react';
import ReactDOM from 'react-dom';


const fName = 'Nirupam';
const sName = 'Changmai';
const date = new Date().toDateString();
const time = new Date().toTimeString();
ReactDOM.render(
  <>
    <h1>{`My name is ${fName} ${sName}`}</h1>
    <p> today Date is {date}</p>
    <p>and the time is - {time} </p>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

