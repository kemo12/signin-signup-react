import { React, Component } from "react";
import "./App.css";
import Swtch from "./Switch";
import * as yup from "yup";
import axios from "axios";
class App extends Component {
  state = {
    errors: {
      email: "",
      password: "",
      repassword: "",
      checkbox: "",
    },
    erorr: "",
    isAuthenticated: false,
  };
  handleLogin = () => {
    this.setState({ isAuthenticated: true });
  };
  handleLogout = () => {
    this.setState({ isAuthenticated: false });
  };
  onSubmit = (e, email, password, repassword, checkbox) => {
    e.preventDefault();
    let signUpSchema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
      repassword: yup.string().required(),
      checkbox: yup.boolean().oneOf([true], "Must Accept Terms and Conditions"),
    });
    signUpSchema
      .validate(
        { email, password, checkbox, repassword },
        { abortEarly: false }
      )
      .then((data) => {
        this.setState({ errors: {} });
        //axios
        axios
          .post("https://fake-api-ahmed.herokuapp.com/v1/auth/signup", {
            email,
            password,
          })
          .then((res) => {
            const sucss = "sign up sucess";
            this.setState({ erorr: sucss });
          })
          .catch((err) => {
            const erorr = err.response.data.error;
            this.setState({ erorr });
          });
      })
      .catch((err) => {
        const errors = {};
        err.inner.forEach(({ message, params }) => {
          errors[params.path] = message;
        });

        this.setState({ errors });
      });
  };

  signin = (e, email, password) => {
    e.preventDefault();
    let signUpSchema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
    });
    signUpSchema
      .validate({ email, password }, { abortEarly: false })
      .then((data) => {
        this.setState({ errors: {} });
        //axios
        axios
          .post("https://fake-api-ahmed.herokuapp.com/v1/auth/login", {
            email,
            password,
          })
          .then((res) => {
            const sucss = "log in sucess";
            this.setState({ erorr: sucss });
            this.handleLogin();
          })
          .catch((err) => {
            const erorr = err.response.data.error;
            this.setState({ erorr });
          });
      })
      .catch((err) => {
        const errors = {};
        err.inner.forEach(({ message, params }) => {
          errors[params.path] = message;
        });

        this.setState({ errors });
      });
  };

  render() {
    const { errors, erorr, isAuthenticated } = this.state;
    return (
      <div className="App">
        <Swtch
          isAuthenticated={isAuthenticated}
          onSubmit={this.onSubmit}
          signin={this.signin}
          error={errors}
          ax_erorr={erorr}
        />
      </div>
    );
  }
}

export default App;
