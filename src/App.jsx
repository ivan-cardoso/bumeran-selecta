import React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import Home from './components/Home/index'
import Login from './components/Login/index'
import NavBar from './components/Navbar/index'
import './App.css'
import Recruiter from "./components/RecruiterForm/Recruiter";

function App() {
  return (
    <div>
      <NavBar />
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
