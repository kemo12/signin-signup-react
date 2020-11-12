import { React } from "react";
import "./Signin.css";
import { useState } from "react";
import bluelogo from "../../images/bluelogo.png";
import Quote from "../../Components/Quote/Qoute";
import joystick from "../../images/joystick.png";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
function Signin(props) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onChange = (e) => {
    e.preventDefault();
    const { name } = e.target;
    const value = e.target.value;
    if (name === "password") {
      setPassword(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };

  return (
    <div className="SignUp">
      <div className="container">
        <div className="left-side">
          <img className="logo" src={bluelogo} alt="logo" />
          <div className="container-left">
            <Quote para={"para2"} start={"start"} />
            <img className={"joystick"} src={joystick} alt="logo" />
          </div>
        </div>
        <div className="right-side">
          <h1>Sign In</h1>
          <p className="para">Go inside the best gamers social network!</p>
          <form onSubmit={(e) => props.signin(e, email, password)}>
            <Input
              error={props.error.email}
              type={"text"}
              htmlFor={"email"}
              className="email"
              value={email}
              placeholder={"Write your email"}
              name={"email"}
              Content={"Your email"}
              onChange={onChange}
            />
            <Input
              error={props.error.password}
              type={"password"}
              htmlFor={"password"}
              className="password"
              value={password}
              placeholder={"Password"}
              name={"password"}
              Content={"Write password*"}
              onChange={onChange}
            />
            <Button content={"Sign In"} classname={"submit"} type={"submit"} />
          </form>
          <div className="massage-container">
            <p>if you haven"t an account please</p>
            <button className="signup-btn">
              <Link to="/signup">SignUp Now</Link>
            </button>
          </div>
          <span className="span">{props.ax_erorr}</span>
        </div>
      </div>
    </div>
  );
}

export default Signin;
