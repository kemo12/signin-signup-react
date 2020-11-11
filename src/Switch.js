import { React, Component } from "react";
import "./App.css";
import SignUp from "./pages/SignUp/SignUp";
import Signin from "./pages/SignIn/Signin";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

class Swtch extends Component {
  render() {
    const { isAuthenticated } = this.props;
    const { error, ax_erorr, handleLogin, handleLogout } = this.props;
    return (
      <div className="Switch">
        <Router>
          <Switch>
            <Route exact path="/home">
              {isAuthenticated ? <Home /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/signup">
              <SignUp
                onSubmit={this.props.onSubmit}
                error={error}
                ax_erorr={ax_erorr}
              />
            </Route>
            <Route exact path="/">
              <Signin
                signin={this.props.signin}
                error={error}
                ax_erorr={ax_erorr}
                handleLogin={handleLogin}
                handleLogout={handleLogout}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Swtch;
