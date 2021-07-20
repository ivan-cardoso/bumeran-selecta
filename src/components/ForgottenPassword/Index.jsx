import React, { useState } from 'react'
import styles from './index.module.css'
import { Alert } from 'antd'
import { CircularProgress } from '@material-ui/core'



const ForgotPass = () => {

  //  const history = useHistory()
  //  const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState({ password: '' })
    const [errorMessage, setErrorMessage] = useState({
        type: '',
        message: '',
      })


    const handleChange = (e) => {

        const { value, name } = e.target
        setErrorMessage('')
        setUser({ ...user, [name]: value })
      }


    const handleSubmit = (e) => {
        e.peventDefault()


        //validations
    if (!user.password)
    setErrorMessage({
      type: 'password',
      message: 'el password no puede estar vacio',
    })
    }

    return (


          <div className={styles.backgroundImage}>
        <div className={styles.loginCard}>
      <h1 color="white">Change your Password</h1>
      
      <form
        onChange={handleChange}
        onSubmit={handleSubmit}
        className={styles.loginform}
        
      >
        <div className={styles.forgotPassInput}>
          <label text-align="center"> Password</label>
          <input type='text' placeholder='Your Password' name='password' />
          {errorMessage.type === 'email' && (
            <Alert message={errorMessage.message} type='error' />
          )}
        </div>

        <div className={styles.forgotPassInput}>
          <label>Your new Password</label>
          <input type='password' placeholder='Your new password' name='new password' />
          {errorMessage.type === 'password' && (
            <Alert message={errorMessage.message} type='error' />
          )}
        </div>
        {!isLoading ? (
          <button type='submit' > Change Password </button>
        ) : (
          <CircularProgress />
        )}
      </form>
      </div>
      </div>
    )
}

export default ForgotPass
