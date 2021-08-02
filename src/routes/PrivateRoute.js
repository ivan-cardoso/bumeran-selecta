import React from "react";
import { Route, Redirect } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import styles from "../components/CompaniesSingleView/index.module.css";


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
    // return <h1 style={{ marginLeft: "40%", fontSize: 70 }}>loading...</h1>;
    return (
      <div className={styles.circularProgress}>
        <CircularProgress disableShrink />
      </div>
    );
  }
}

export default PrivateRoute;
