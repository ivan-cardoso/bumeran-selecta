import { React, useEffect, useState } from 'react'
import { Route, Switch, Redirect } from 'react-router'
import Home from './components/Home/Index'
import Login from './components/Login/Index'
import NavBar from './components/Navbar/Index'
import './App.css'
import Jobs from './components/Jobs/Jobs'
import JobSingleView from './components/Jobs/JobSingleView'
import Recruiter from './components/RecruiterForm/Recruiter'
import SingleView from './components/RecruiterSingleView/SingleView'
import ForgotPass from './components/ForgottenPassword/Index'
import Companies from './components/Companies/Companies'
import firebase from 'firebase'
import { useDispatch } from 'react-redux'
import { userCookie } from './store/user/user'
import PrivateRoute from './routes/PrivateRoute'
import AdminRoute from './routes/AdminRoute'
import CompaniesSingleView from './components/CompaniesSingleView/CompaniesSingleView'
import Sidebar from './components/Sidebar/Index'
import User from './components/Users/Index'
import axios from 'axios'

function App() {
  const [isAuthenticated, setisAuthenticated] = useState('')
  const [role, setRole] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const dispatch = useDispatch()
  useEffect(() => {
    firebase.auth().onAuthStateChanged((userCred) => {
      if (userCred) {
        axios
          .get(`/api/user/${userCred.uid}`)
          .then((res) => res.data)
          .then((user) => {
            dispatch(userCookie(user))
            setisAuthenticated(true)
            setRole(user.role.name)
          })
          .then(() => {
            setIsLoading(false);
            setisAuthenticated(true);
          });
      } else {
        setIsLoading(false);
        setisAuthenticated(false);
      }
    })
  }, [dispatch])

  return (
    <div>
      <NavBar />
      <Sidebar />
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route path='/forgotpassword' component={ForgotPass} />
        <AdminRoute
          path='/users'
          isAuthenticated={isAuthenticated}
          isLoading={isLoading}
          role={role}
          component={User}
        />
        <PrivateRoute
          exact
          path='/jobs'
          component={Jobs}
          isAuthenticated={isAuthenticated}
          isLoading={isLoading}
        />

        <PrivateRoute
          exact
          path='/jobs/:id'
          component={JobSingleView}
          isAuthenticated={isAuthenticated}
          isLoading={isLoading}
        />
        <PrivateRoute
          isAuthenticated={isAuthenticated}
          exact
          path='/recruiters'
          component={Recruiter}
          isLoading={isLoading}
        />
        <PrivateRoute
          exact
          path='/companies'
          component={Companies}
          isAuthenticated={isAuthenticated}
          isLoading={isLoading}
        />
        <PrivateRoute
          path='/companies/:id'
          component={CompaniesSingleView}
          isAuthenticated={isAuthenticated}
          isLoading={isLoading}
        />
        <PrivateRoute
          path='/recruiters/:id'
          component={SingleView}
          isAuthenticated={isAuthenticated}
          isLoading={isLoading}
        />
        <Redirect from='/' to='/home' />
      </Switch>
    </div>
  )
}

export default App
