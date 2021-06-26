import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import Input from './components/atoms/input/input'
import Login from "./components/organisms/form/login";
import SignLayout from './components/templates/sign/sign'
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <SignLayout />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
