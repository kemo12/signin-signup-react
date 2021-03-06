import { React } from "react";
import { useState } from "react";
import Quote from "../../Components/Quote/Qoute";
import "./SignUp.css";
import wihtelogo from "../../images/wihtelogo.png";
import points from "../../images/points.png";
import Back from "../../Components/Back/Back";
import Input from "../../Components/Input/Input";
import Checkbox from "../../Components/Checkbox/Checkbox";
import Button from "../../Components/Button/Button";
import google from "../../images/google.jpg";
function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [checkbox, setCheckbox] = useState("");

  const onChange = (e) => {
    const { name } = e.target;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    if (name === "password") {
      setPassword(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "repassword") {
      setRepassword(value);
    } else {
      setCheckbox(value);
    }
  };

  return (
    <div className="SignUp">
      <div className="container">
        <div className="left">
          <div className="left-container">
            <div className="logo">
              <img id="logo" src={wihtelogo} alt="logo" />
            </div>
            <div className="points">
              <img id="points" src={points} alt="points" />
            </div>
            <Quote para={"para1"} start={"start-quote"} />
            <span className="close">┛</span>
          </div>
        </div>

        <div className="right">
          <Back />
          <div className="form-container">
            <h2 className="h1">Register Individual Account!</h2>
            <p className="para">
              For the purpose of gamers regulation, your details are required.
            </p>
            <form
              className="form"
              onSubmit={(e) =>
                props.onSubmit(e, email, password, repassword, checkbox)
              }
            >
              <Input
                error={props.error.email}
                type={"text"}
                htmlFor={"email"}
                className="email"
                value={email}
                placeholder={"Enter email address"}
                name={"email"}
                Content={"Email address*"}
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
                Content={"Create password*"}
                onChange={onChange}
              />
              <Input
                error={props.error.repassword}
                type={"password"}
                htmlFor={"repassword"}
                className="repeat-password"
                value={repassword}
                placeholder={"Repeat password"}
                name={"repassword"}
                Content={"Repeat password*"}
                onChange={onChange}
              />
              <Checkbox
                error={props.error.checkbox}
                checkbox={checkbox}
                onChange={onChange}
              />
              <Button
                content={"Register Account"}
                classname={"submit"}
                type={"submit"}
              />
              <div className="or">or</div>
              <Button
                content={"Register with Google"}
                img={google}
                classname={"google-login"}
              ></Button>
              <span className="span">{props.ax_erorr}</span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
