import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { UserLogout } from '../../store/user/user'
import s from './index.module.css'
/* Imports Material-UI */
import Modal from '@material-ui/core/Modal'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

/* Functions Material-UI */
function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'absolute',
    width: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

/* End Functions */

const NavBar = () => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  /* Material-UI state and functions */
  const [modalStyle] = React.useState(getModalStyle)
  const [open, setOpen] = React.useState(false)

  const classes = useStyles()

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  /* End state and functions */

  const handleLogout = () => {
    console.log('hice logout')
    dispatch(UserLogout(user))
  }

  return (
    <div className={s.navbarContainer}>
      <Link to={'/'}>
        <img
          src='https://www.bumeran.com.ar/selecta/wp-content/uploads/2021/06/logo-2.png'
          alt='bumeran-selecta-logo'
        />
      </Link>

      {user.uid ? (
        <div className={s.navbarButtonsContainer}>
          <button
            className={s.buttonPerfil}
            type='button'
            onClick={() => handleOpen()}
          >
            <Avatar alt={user.email} src={user.photoURL} />
          </button>
          <button className={s.loginButton} onClick={handleLogout}>
            {' '}
            Logout
          </button>
          {console.log(user)}
        </div>
      ) : (
        <div>
          <Link to={'/login'}>
            <button className={s.loginButton}>Login</button>
          </Link>
        </div>
      )}
      {/* Material-UI animation */}
      <Modal
        open={open}
        onClose={() => {
          handleClose()
        }}
        className={classes.modal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div style={modalStyle} className={classes.paper}>
            <h1>Personal information</h1>
            <h3>
              Name : <span>{user.displayName}</span>
            </h3>
            <h3>
              {' '}
              Email : <span>{user.email}</span>{' '}
            </h3>
            <h3>ETC...</h3>
          </div>
        </Fade>
      </Modal>
      {/* End Material-UI animation */}

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