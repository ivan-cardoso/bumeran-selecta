import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import s from './index.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { UserLogout } from '../../store/user/user'
import Sidebar from '../Sidebar/Index'


const NavBar = () => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const handleLogout = () => {
    console.log('hice logout')
    dispatch(UserLogout(user))
  }

 

  return (
    
      <div className={s.navbarContainer}>
      
      <Sidebar />

      <Link to={"/"} >
        <img src="https://www.bumeran.com.ar/selecta/wp-content/uploads/2021/06/logo-2.png" alt="bumeran-selecta-logo" />
      </Link>

      {user ? 
        <div className={s.navbarButtonsContainer} >
            <Avatar alt={user.email} src={user.photoURL} />
            <button  className={s.loginButton} onClick={handleLogout}> Logout</button>
            {console.log(user)}
        </div> 
      : <div>
        <Link to={"/login"}>
          <button className={s.loginButton}>Login</button>
        </Link>
        </div>
      }

      {/* {user && (
        <div>
          <Avatar alt={user.email} src={user.photoURL} />
          <button onClick={handleLogout}> Logout</button>
        </div>
      )} */}
    </div>
  )
}

export default NavBar
