import { React } from "react";
import "./Checkbox.css";
function Checkbox(props) {
  return (
    <div className="Checkbox">
      <input
        name="checkbox"
        className="check"
        type="checkbox"
        checked={props.Checkbox}
        onChange={props.onChange}
      />
      <span>I agree to terms & conditions</span>
      {props.error && <div>{props.error}</div>}
    </div>
  );
}

export default Checkbox;
