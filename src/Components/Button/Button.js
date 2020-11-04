import { React, Component } from "react";
import "./Button.css";
import google from "../../images/google.jpg";
class Button extends Component {
  input() {}
  render() {
    return (
      <div className="Button">
        <button className={this.props.classname} type={this.props.type}>
          {this.props.classname === "google-login" ? (
            <img src={google} className="googleIcoin" />
          ) : (
            ""
          )}
          {this.props.content}
        </button>
      </div>
    );
  }
}

export default Button;
