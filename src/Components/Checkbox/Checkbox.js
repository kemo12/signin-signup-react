import { React, Component } from "react";
import "./Checkbox.css";
class Checkbox extends Component {
  render() {
    const { error } = this.props;
    return (
      <div className="Checkbox">
        <input
          name="checkbox"
          className="check"
          type="checkbox"
          checked={this.props.Checkbox}
          onChange={this.props.onChange}
        />
        <span>I agree to terms & conditions</span>
        {error && <div>{error}</div>}
      </div>
    );
  }
}

export default Checkbox;
