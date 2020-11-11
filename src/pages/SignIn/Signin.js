import { React, Component } from "react";
import "./Signin.css";
import bluelogo from "../../images/bluelogo.png";
import Quote from "../../Components/Quote/Qoute";
import joystick from "../../images/joystick.png";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
class Signin extends Component {
  state = {
    password: "",
    email: "",
  };
  onChange = (e) => {
    const { name } = e.target;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({ [name]: value });
  };
  render() {
    const { email, password } = this.state;
    const { ax_erorr, error } = this.props;
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
            <form onSubmit={(e) => this.props.signin(e, email, password)}>
              <Input
                error={error.email}
                type={"text"}
                htmlFor={"email"}
                className="email"
                value={email}
                placeholder={"Write your email"}
                name={"email"}
                Content={"Your email"}
                onChange={this.onChange}
              />
              <Input
                error={error.password}
                type={"password"}
                htmlFor={"password"}
                className="password"
                value={password}
                placeholder={"Password"}
                name={"password"}
                Content={"Write password*"}
                onChange={this.onChange}
              />
              <Button
                content={"Sign In"}
                classname={"submit"}
                type={"submit"}
              />
            </form>
            <div className="massage-container">
              <p>if you haven"t an account please</p>
              <button className="signup-btn">
                <Link to="/signup">SignUp Now</Link>
              </button>
            </div>
            <span>{ax_erorr}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
