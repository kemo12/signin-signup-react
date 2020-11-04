import { React, Component } from "react";
import "./Back.css";

class Back extends Component {
  render() {
    return (
      <div className="Back">
        <button id="back" onClick={this.props.switch2}>
          &lt; back
        </button>
      </div>
    );
  }
}

export default Back;
