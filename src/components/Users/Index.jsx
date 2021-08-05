import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from '../../store/allUsers/allusers'
import { getAllAditionalData } from '../../store/aditionalData/actions'
import useStyles from '../Companies/style'
import { Paper } from '@material-ui/core'
import UsersTable from './UsersTable'
import AddUser from './AddUser'

export default function Users() {
  const dispatch = useDispatch()
  const allUsers = useSelector((state) => state.allUsers)
  const classes = useStyles()

  const [values, setValues] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  React.useEffect(() => {
    dispatch(getAll())
    dispatch(getAllAditionalData())
  }, [dispatch])

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 150,
        }}
      >
        <AddUser
          values={values}
          setValues={setValues}
          handleInputChange={handleInputChange}
        />
      </div>

      {/* <InputSearch /> */}

      <Paper className={classes.pageContent}>
        {allUsers.length > 0 ? (
          <UsersTable allUsers={allUsers} />
        ) : (
          <h1>No hay resultados...</h1>
        )}
      </Paper>
    </>
  )
}
