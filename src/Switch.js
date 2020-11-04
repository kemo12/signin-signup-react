import { React, Component } from "react";
import "./App.css";
import SignUp from "./pages/SignUp/SignUp";
import Signin from "./pages/SignIn/Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Swtch extends Component {
  render() {
    const { error } = this.props;
    return (
      <div className="Switch">
        <Router>
          <Switch>
            <Route exact path="/signup">
              <SignUp onSubmit={this.props.onSubmit} error={error} />
            </Route>
            <Route exact path="/">
              <Signin signin={this.props.signin} error={error} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Swtch;
