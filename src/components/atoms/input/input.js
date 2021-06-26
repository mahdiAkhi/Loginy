import "./style.css";
import React from "react";

export default function (props) {
  return (
    <div className="field">
      <p className="control has-icons-left">
        <input
          className="input"
          id="inp"
          type="email"
          placeholder={props.placeholder}
        />
        <span className="icon is-small is-left">
          <img src={process.env.PUBLIC_URL + "/assets/icon/" + props.icon} />
        </span>
        <div className="line"></div>
      </p>
    </div>
  );
}