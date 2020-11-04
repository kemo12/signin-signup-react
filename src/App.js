import { React, Component } from "react";
import "./App.css";
import Switch from "./Switch";

class App extends Component {
  state = {
    massage: "",
    users: [
      { email: "kamel@gmail.com", password: "123" },
      { email: "kamel@gmail.com", password: "123" },
    ],
  };
  onSubmit = (e, mail, password, repassword, checkbox) => {
    e.preventDefault();
    if (mail === "" || password === "" || repassword === "") {
      this.setState((prevState) => {
        return { massage: "all feild requier" };
      });
      return;
    } else {
      const email = this.state.users.map((info, index) => {
        if (info.email === mail) {
          this.setState((prevState) => {
            return { massage: "this user is used" };
          });
          return;
        }
      });
      if (checkbox === false) {
        this.setState((prevState) => {
          return { massage: "you should agree to terms & cnditions" };
        });
        return;
      }
      if (password !== repassword) {
        this.setState((prevState) => {
          return { massage: "the two password is not equal" };
        });
        return;
      }
      const newuser = {
        email: mail,
        password: password,
      };
      const newusers = [...this.state.users];
      newusers.push(newuser);
      console.log(newusers);
      console.log(this.state.users);
      this.setState((prevState) => {
        return { users: newusers, massage: "register is done" };
      });
    }
  };
  signin = (e, mail, password) => {
    e.preventDefault();
    if (mail === "" || password === "") {
      this.setState((prevState) => {
        return { massage: "all felids required" };
      });
      return;
    } else {
      const login = this.state.users.map((info, index) => {
        if (mail === info.email && password === info.password) {
          this.setState((prevState) => {
            return { massage: "login success" };
          });
        } else {
          this.setState((prevState) => {
            return { massage: "please check your input" };
          });
        }
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Switch
          onSubmit={this.onSubmit}
          massage={this.state.massage}
          signin={this.signin}
        />
      </div>
    );
  }
}

export default App;
