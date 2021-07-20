import react from 'react'
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ isLoggedIn, Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};