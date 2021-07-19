import React from 'react'
import { CircularProgress } from '@material-ui/core'
import { Alert } from 'antd'
import styles from './index.module.css'

function LoginForm({ handleChange, handleSubmit, errorMessage, isLoading }) {


  return (


    <div >
    <div className={styles.loginCard}>

      <h1 color="white">Enter you Account</h1>
      
      <form
        onChange={handleChange}
        onSubmit={handleSubmit}
        className={styles.loginform}
        
      >
        <div className={styles.loginInput}>
          <label text-align="center">Email</label>
          <input type='text' placeholder='Your Email' name='email' />
          {errorMessage.type === 'email' && (
            <Alert message={errorMessage.message} type='error' />
          )}
        </div>
        <div className={styles.loginInput}>
          <label>Password</label>
          <input type='password' placeholder='Your password' name='password' />
          {errorMessage.type === 'password' && (
            <Alert message={errorMessage.message} type='error' />
          )}
        </div>
        {!isLoading ? (
          <button type='submit' > Ingresar </button>
        ) : (
          <CircularProgress />
        )}
      </form>
      </div>
      </div>
    
  )
}

export default LoginForm
