import React, { useState } from 'react'
import styles from './index.module.css'
import { Alert, message } from 'antd'
import { CircularProgress } from '@material-ui/core'
import Btn from '../UX/Buttons/BtnConfirm'
import BtnGoBack from '../UX/Buttons/BtnGoBack'
import firebase from '../../utils/firebase'
import { useHistory } from 'react-router-dom'

const ForgotPass = () => {
  const history = useHistory()
  //  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState('')
  const [errorMessage, setErrorMessage] = useState({
    type: '',
    mensaje: '',
  })

  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleChange = (e) => {
    const { value } = e.target
    setErrorMessage('')
    setUser(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!user)
      setErrorMessage({
        type: 'email',
        mensaje: 'por favor ingrese un email valido',
      })
    else {
      firebase
        .auth()
        .sendPasswordResetEmail(user)
        .then(() => {
          console.log('email enviado ok')
          setShowConfirmation(!showConfirmation)
        })
        .catch((error) => {
          var errorCode = error.code
          var errorMessage = error.message
          message.warning('El usuario no existe')
          console.log(errorCode)
          console.log(errorMessage)
        })
    }
  }

  return (
    <div className={styles.backgroundImage}>
      {!showConfirmation ? (
        <div className={styles.loginCard}>
          <h1 color='white'>Change your Password</h1>
          <form
            onChange={handleChange}
            onSubmit={handleSubmit}
            className={styles.loginform}
          >
            <div className={styles.forgotPassInput}>
              <label text-align='center'> Por favor ingrese su mail</label>
              <input type='email' placeholder='email' name='email' />
              {errorMessage.type === 'email' && (
                <Alert message={errorMessage.mensaje} type='error' />
              )}
            </div>

            <div style={{ width: 400 }}>
              {!isLoading ? <Btn name='confirmar' /> : <CircularProgress />}
            </div>
          </form>
        </div>
      ) : (
        <div className={styles.loginCard}>
          <div className={styles.emailconfirm}>
            <h1>e-mail enviado con exito </h1>
            <h2> por favor verifique su correo no deseado </h2>
            <BtnGoBack
              name='Ir a iniciar sesion'
              onClick={() => history.push('/login')}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default ForgotPass
