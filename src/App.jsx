import { React, useEffect } from "react"
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router'
import Home from './components/Home/Index'
import Login from './components/Login/Index'
import NavBar from './components/Navbar/Index'
import './App.css'
import Recruiter from './components/RecruiterForm/Recruiter'
import SingleView from './components/RecruiterSingleView/SingleView'
import Footer from './components/Footer/Index'
import ForgotPass from './components/ForgottenPassword/Index'
import { UserLogin } from './store/user/user'


/* {uid && <Route exact path='/recruiters' component={Recruiter} : '/home' />} */


function App() {

  return (

    <div>
      <NavBar />
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/login' component={Login} />
        
         <Route exact path='/recruiters' component={Recruiter} />

        <Route path='/recruiters/:id' component={SingleView} />
        <Route path="/forgotpassword" component={ForgotPass} />
        <Redirect from='/' to='/home' />

      </Switch>
      <Footer />
    </div>
    
  )
}

export default App
