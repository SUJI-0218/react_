import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import App from './App2';
// import App from './App3';
// import App from './App4';

import reportWebVitals from './reportWebVitals';
import Test from "./test"//외부 파일을 쓸때 이렇게 import 를 사용해서 가져오면 됨
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
function Test1(){
  return <h1>Test.안녕하세요</h1>
}
function Test2(){
  return <h1>Test2</h1>
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
