import { React } from "react";
import { Route, Switch, Redirect } from "react-router";
import Home from "./components/Home/Index";
import Login from "./components/Login/Index";
import NavBar from "./components/Navbar/Index";
import "./App.css";
import Jobs from "./components/Jobs/Jobs";
import Recruiter from "./components/RecruiterForm/Recruiter";
import SingleView from "./components/RecruiterSingleView/SingleView";
import Footer from "./components/Footer/Index";
import ForgotPass from "./components/ForgottenPassword/Index";
import { PrivateRoute } from "./routes/PrivateRoute";
import Companies from "./components/Companies/Companies";
import CompaniesSingleView from "./components/CompaniesSingleView/CompaniesSingleView";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/jobs" component={Jobs} />
        {/*  <PrivateRoute
          isLoggedIn={isLoggedIn}
          path="/recruiters"
          Component={Recruiter}
        /> */}
        <Route exact path="/recruiters" component={Recruiter} />
        <Route exact path="/companies" component={Companies} />
        <Route path="/companies/:id" component={CompaniesSingleView} />
        <Route path="/recruiters/:id" component={SingleView} />
        <Route path="/forgotpassword" component={ForgotPass} />
        <Redirect from="/" to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}
/* component={()=> usuario ? <Home /> : <Redirect to="/iniciar" />  */

export default App;
