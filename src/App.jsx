import React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import Home from './components/Home/Index'
import Login from './components/Login/Index'
import NavBar from './components/Navbar/Index'
import './App.css'
import Recruiter from './components/RecruiterForm/Recruiter'
import SingleView from './components/RecruiterSingleView/SingleView'
import Footer from './components/Footer/Index'


function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/recruiters' component={Recruiter} />
        <Route path='/recruiters/:id' component={SingleView} />
        <Redirect from='/' to='/home' />

      </Switch>
      <Footer />
    </div>
  )
}

export default App
