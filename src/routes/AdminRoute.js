import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core'
import styles from '../components/CompaniesSingleView/index.module.css'
import s from './index.module.css'

function AdminRoute({
  component: Component,
  isAuthenticated,
  isLoading,
  role,
  ...children
}) {
  if (!isLoading) {
    if (isAuthenticated === true && role !== 'admin' && role !== 'auditor') {
      return (
        <div className={s.container}>
          <h1 className={s.title}>
            No tenes permiso para ingresar a esta seccion.
          </h1>
          <h2 className={s.title}>Por favor consulta con el admin </h2>
        </div>
      )
    }
    if (isAuthenticated === false) return <Redirect to='login' />

    if (isAuthenticated === true && (role === 'admin' || role === 'auditor'))
      return (
        <Route {...children} render={(props) => <Component {...props} />} />
      )
    else {
      return (
        <div className={styles.circularProgress}>
          <CircularProgress disableShrink />
        </div>
      )
    }
  } else {
    // return <h1 style={{ marginLeft: "40%", fontSize: 70 }}>loading...</h1>;
    return (
      <div className={styles.circularProgress}>
        <CircularProgress disableShrink />
      </div>
    )
  }
}

export default AdminRoute
