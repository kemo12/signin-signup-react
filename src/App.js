import { React, Component } from "react";
import "./App.css";
import Swtch from "./Switch";
import * as yup from "yup";
class App extends Component {
  state = {
    errors: {
      email: "sad",
      password: "sd",
      repassword: "sd",
      checkbox: "sd",
    },
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
        console.log(data);
      })
      .catch((err) => {
        console.log(this.state.errors);
        const errors = {};
        console.log(errors);
        err.inner.forEach(({ message, params }) => {
          errors[params.path] = message;
        });
        console.log(errors);

        this.setState({ errors });
      });
  };

  signin = (e, email, password) => {
    e.preventDefault();
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="App">
        <Swtch onSubmit={this.onSubmit} signin={this.signin} error={errors} />
      </div>
    );
  }
}

export default App;
