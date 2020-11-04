import { React, Component } from "react";
import "./input.css";

class Input extends Component {
  render() {
    return (
      <div>
        <label htmlFor={this.props.htmlFor} className="label">
          {this.props.Content}
        </label>
        <input
          type={this.props.type}
          value={this.props.value}
          name={this.props.name}
          onChange={this.props.onChange}
          className="input"
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

export default Input;
