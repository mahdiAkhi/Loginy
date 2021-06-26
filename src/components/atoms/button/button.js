import React from 'react';
import './style.css';
export default function (props) {
    return (
      <button className="button is-two-thirds" id="login-btn">
        {props.title }
      </button>
    );
 }