import { React, Component } from "react";
import "./Back.css";
import { Link } from "react-router-dom";
class Back extends Component {
  render() {
    return (
      <div className="Back">
        <button id="back">
          <Link to="/">&lt; back</Link>
        </button>
      </div>
    );
  }
}

export default Back;
