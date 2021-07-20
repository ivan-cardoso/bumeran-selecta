import { React, useEffect, useState } from 'react'
import { Route, Switch, Redirect } from 'react-router'
import Home from './components/Home/Index'
import Login from './components/Login/Index'
import NavBar from './components/Navbar/Index'
import './App.css'
import Jobs from './components/JobForm/Jobs'
import Recruiter from './components/RecruiterForm/Recruiter'
import SingleView from './components/RecruiterSingleView/SingleView'
import Footer from './components/Footer/Index'
import ForgotPass from './components/ForgottenPassword/Index'
import Companies from './components/Companies/Companies'
import firebase from 'firebase'
import { useDispatch } from 'react-redux'
import { userCookie } from './store/user/user'
import PrivateRoute from './routes/PrivateRoute'

function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    firebase.auth().onAuthStateChanged((userCred) => {
      if (userCred) {
        dispatch(userCookie(userCred))
        setisAuthenticated(true)
      }
    })
  }, [dispatch])

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route path='/forgotpassword' component={ForgotPass} />
        <PrivateRoute
          exact
          path='/jobs'
          component={Jobs}
          isAuthenticated={isAuthenticated}
        />
        <PrivateRoute
          isAuthenticated={isAuthenticated}
          exact
          path='/recruiters'
          component={Recruiter}
        />
        <PrivateRoute
          exact
          path='/companies'
          component={Companies}
          isAuthenticated={isAuthenticated}
        />
        <PrivateRoute
          path='/recruiters/:id'
          component={SingleView}
          isAuthenticated={isAuthenticated}
        />
        <Redirect from='/' to='/home' />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
