import React, { useEffect } from "react";
import UserStore from "./UserStore";
import { observer } from "mobx-react";
import { Switch } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import LandingPage from "./Components/LandingPage/LandingPage";
import AuthenticatedRoute from "./AuthenticatedRoute";
import NonAuthenticatedRoute from "./NonAuthenticatedRoute";

function App() {
  useEffect(() => {
    UserStore.isLoggedIn = false;
    UserStore.username = "Gawtham";
  }, []);

  const isAuth = UserStore.isLoggedIn;

  return (
    <Switch>
      <AuthenticatedRoute path="/home" exact component={HomePage} isAuth={isAuth} />
      <NonAuthenticatedRoute path="/" component={LandingPage} isAuth={isAuth} />
    </Switch>
  );
}

export default observer(App);
