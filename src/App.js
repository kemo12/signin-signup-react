import React from "react";
import "./App.css";
import { useState } from "react";
import Swtch from "./Switch";
import * as yup from "yup";
import axios from "axios";
function App() {
  //state
  const [erorrs, setErrors] = useState({
    email: "",
    password: "",
    repassword: "",
    checkbox: "",
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [erorr, setError] = useState("");
  //methods
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const onSubmit = (e, email, password, repassword, checkbox) => {
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
        setError("");
        //axios
        axios
          .post("https://fake-api-ahmed.herokuapp.com/v1/auth/signup", {
            email,
            password,
          })
          .then((res) => {
            const sucss = "sign up sucess";
            setError(sucss);
          })
          .catch((err) => {
            const erorr = err.response.data.error;
            setError(erorr);
          });
      })
      .catch((err) => {
        const errors = {};
        err.inner.forEach(({ message, params }) => {
          errors[params.path] = message;
        });

        setErrors(errors);
      });
  };

  const signin = (e, email, password) => {
    e.preventDefault();
    let signUpSchema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
    });
    signUpSchema
      .validate({ email, password }, { abortEarly: false })
      .then((data) => {
        setErrors({});
        //axios
        axios
          .post("https://fake-api-ahmed.herokuapp.com/v1/auth/login", {
            email,
            password,
          })
          .then((res) => {
            const sucss = "log in sucess";
            setError(sucss);
            handleLogin();
          })
          .catch((err) => {
            const erorr = err.response.data.error;
            setError(erorr);
          });
      })
      .catch((err) => {
        const errors = {};
        err.inner.forEach(({ message, params }) => {
          errors[params.path] = message;
        });

        setErrors(errors);
      });
  };

  return (
    <div className="App">
      <Swtch
        isAuthenticated={isAuthenticated}
        onSubmit={onSubmit}
        signin={signin}
        error={erorrs}
        ax_erorr={erorr}
      />
    </div>
  );
}

export default App;
