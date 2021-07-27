import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({
  component: Component,
  isAuthenticated,
  isLoading,
  ...children
}) {
  if (!isLoading) {
    if (isAuthenticated === true) {
      return (
        <Route {...children} render={(props) => <Component {...props} />} />
      );
    }
    return <Redirect to="login" />;
  } else {
    return <h1 style={{ marginLeft: "40%", fontSize: 70 }}>loading...</h1>;
  }
}

export default PrivateRoute;
