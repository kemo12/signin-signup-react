import { React } from "react";
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

function Swtch(props) {
  return (
    <div className="Switch">
      <Router>
        <Switch>
          <Route exact path="/home">
            {props.isAuthenticated ? <Home /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/signup">
            <SignUp
              onSubmit={props.onSubmit}
              error={props.error}
              ax_erorr={props.ax_erorr}
            />
          </Route>
          <Route exact path="/">
            <Signin
              signin={props.signin}
              error={props.error}
              ax_erorr={props.ax_erorr}
              handleLogin={props.handleLogin}
              handleLogout={props.handleLogout}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Swtch;
