import React from 'react'
import styles from './index.module.css'

const Login = () => {

  
 
  return (
    <div className={styles.loginCard}>
      <h1>Login</h1>
      <form>
        <div className={styles.loginInput}>
          <label>Email</label>
          <input 
            type='text'
            placeholder='Your Email'
            name='email'
            required
          />
        </div>
       <div className={styles.loginInput}>
        <label>Password</label>
          <input 
            type='text'
            placeholder='Your password'
            name='password'
            required
          />
       </div>
        <button
          type='submit'
        > Login </button>
      </form>
    </div>
  );
}
 
export default Login;