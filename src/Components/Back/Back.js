import { React } from "react";
import "./Back.css";
import { Link } from "react-router-dom";
function Back() {
  return (
    <div className="Back">
      <button id="back">
        <Link to="/">&lt; back</Link>
      </button>
    </div>
  );
}

export default Back;
