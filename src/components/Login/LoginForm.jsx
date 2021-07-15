import React from 'react'
import { CircularProgress } from '@material-ui/core'
import { Alert } from 'antd'
import styles from './index.module.css'

function LoginForm({ handleChange, handleSubmit, errorMessage, isLoading }) {
  return (
    <div className={styles.loginCard}>
      <h1>Login</h1>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <div className={styles.loginInput}>
          <label>Email</label>
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
          <button type='submit'> Login </button>
        ) : (
          <CircularProgress />
        )}
      </form>
    </div>
  )
}

export default LoginForm
