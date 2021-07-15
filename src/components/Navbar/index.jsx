import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import style from './index.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { UserLogout } from '../../store/user/user'

const NavBar = () => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const handleLogout = () => {
    console.log('hice logout')
    dispatch(UserLogout(user))
  }

  return (
    <div className='navbar-container'>
      <p>HOME</p>
      <p>Recruiters</p>
      {user && (
        <div>
          <Avatar alt={user.email} src={user.photoURL} />
          <button onClick={handleLogout}> Logout</button>
        </div>
      )}
    </div>
  )
}

export default NavBar
