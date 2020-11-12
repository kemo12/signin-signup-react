import { React } from "react";
import "./input.css";

function Input(props) {
  return (
    <div>
      <label htmlFor={props.htmlFor} className="label">
        {props.Content}
      </label>
      <input
        type={props.type}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
        className="input"
        placeholder={props.placeholder}
      />
      {props.error && <div>{props.error}</div>}
    </div>
  );
}

export default Input;
