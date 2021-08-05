import React from 'react'
import { CircularProgress } from '@material-ui/core'
import { Alert } from 'antd'
import { Link } from 'react-router-dom'
import styles from './index.module.css'

function LoginForm({ handleChange, handleSubmit, errorMessage, isLoading }) {
  return (
    <div className={styles.backgroundImage}>
      <div className={styles.loginCard}>
        <h1 style={{ color: "white" }}>Ingrese su cuenta</h1>

        <form
          onChange={handleChange}
          onSubmit={handleSubmit}
          className={styles.loginform}
        >
          <div className={styles.loginInput}>
            <label text-align="center">Email</label>
            <input type="text" placeholder="Your Email" name="email" />
            {errorMessage.type === "email" && (
              <Alert message={errorMessage.message} type="error" />
            )}
          </div>
          <div className={styles.loginInput}>
            <label>Password</label>
            <input
              type="password"
              placeholder="Your password"
              name="password"
            />
            {errorMessage.type === "password" && (
              <Alert message={errorMessage.message} type="error" />
            )}
            <p>
              Olvido su contraseña?{" "}
              <span>
                <Link to="/forgotpassword">Haga click aqui</Link>
              </span>
            </p>
          </div>
          {!isLoading ? (
            <button className={styles.loginbtn} type="submit">
              Ingresar
            </button>
          ) : (
            <CircularProgress />
          )}
        </form>
      </div>
    </div>
  );
}

export default LoginForm
