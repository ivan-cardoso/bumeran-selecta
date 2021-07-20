import React, { useState } from 'react'
import 'antd/dist/antd.css'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import LoginForm from './LoginForm'
import { UserLogin } from '../../store/user/user'
import firebase from '../../utils/firebase'

const Login = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState({ email: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState({
    type: '',
    message: '',
  })

  const history = useHistory()

  const handleChange = (e) => {
    const { value, name } = e.target
    setErrorMessage('')
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    function validateEmail(email) {
      var re = /\S+@\S+\.\S+/
      return re.test(email)
    }
    //validations
    if (!user.password)
      setErrorMessage({
        type: 'password',
        message: 'el password no puede estar vacio',
      })

    if (!validateEmail(user.email))
      setErrorMessage({
        type: 'email',
        message: 'por favor ingrese un email valido: ejemplo@ejemplo.com',
      })
    else {
      setIsLoading(true)
      dispatch(UserLogin(user))
        .then((user) => {
          if (user.type === 'UserLogin/fulfilled') history.push('/')
          else {
            setErrorMessage({
              type: 'password',
              message: 'password o contraseña invalidas',
            })
          }
        })
        .finally(() => setIsLoading(false))
    }
  }

  const changePassword = (email) => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        var errorCode = error.code
        var errorMessage = error.message
        // ..
      })
  }

  return (
    <>
      <div>
        <LoginForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          errorMessage={errorMessage}
          isLoading={isLoading}
        />
        <button onClick={() => history.goBack()}>Go back</button>
      </div>
    </>
  )
}

export default Login
