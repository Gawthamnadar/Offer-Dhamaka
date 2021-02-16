import React from "react";
import "./Login.css";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ForgotPasswordForm from "./ForgotPasswordForm";

function LandingPage() {
  return (
    <div className="LoginPage">
      <Switch>
        <Route path={`/login`} exact component={LoginForm} />
        <Route path={`/register`} exact component={RegisterForm} />
        <Route
          path={`/forgotPassword`}
          exact
          component={ForgotPasswordForm}
        />
        <Redirect to={`/login`} />
      </Switch>
    </div>
  );
}

export default LandingPage;
