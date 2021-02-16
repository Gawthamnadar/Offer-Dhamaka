import React from "react";
import { Route, Redirect } from "react-router-dom";

function NonAuthenticatedRoute({
  isAuth: isAuth,
  component: Component,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuth) {
          return <Component />;
        } else {
          return <Redirect to="/home" />;
        }
      }}
    />
  );
}

export default NonAuthenticatedRoute;
