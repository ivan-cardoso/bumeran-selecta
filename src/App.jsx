import React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import Home from './components/Home/Index'
import Login from './components/Login/Index'
import NavBar from './components/Navbar/Index'
import './App.css'
import Recruiter from "./components/RecruiterForm/Recruiter";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path="/recruiters" component={Recruiter} />
        <Redirect from='/' to='/home' />
      </Switch>
    </div>
  )
}

export default App
