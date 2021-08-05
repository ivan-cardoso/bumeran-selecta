import React from 'react'
import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core'
import useStyles from '../Companies/style'
import { useDispatch, useSelector } from 'react-redux'
import ImageUpload from '../RecruiterForm/ImageUpload'
import { message } from 'antd'
import { getAll } from '../../store/allUsers/allusers'
import axios from 'axios'
export default function UpdateUserForm({
  values,
  setValues,
  handleInputChange,
  handleSubmit,
  setShowTable,
  handleClose,
}) {
  const dispatch = useDispatch()

  const { roles } = useSelector((state) => state.aditionalData)

  const classes = useStyles()

  const handleSubmitUpdate = (e) => {
    e.preventDefault()
    if (
      values.name !== null &&
      values.surname !== null &&
      values.email !== null &&
      values.role.name !== null
    ) {
      axios
        .put(`/api/user/update/${values.uid}`, values)
        .then((res) => res.data)
        .then((data) => console.log(data))
        .then(() => dispatch(getAll()))
        .then(() => {
          message.success('Usuario Actualizado con Exito')
          handleClose()
          setValues('')
        })
    } else {
      message.warning('Complete los campos')
    }
  }

  return (
    <>
      <form onChange={(e) => handleInputChange(e)} className={classes.root}>
        <Grid item xs={8}>
          <ImageUpload setValues={setValues} values={values} />
        </Grid>
        <Grid container spacing={12}>
          <Grid item xs={6}>
            <TextField
              variant='outlined'
              label='Nombre'
              name='name'
              value={values.name}
              autoComplete='disabled'
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant='outlined'
              label='Apellido'
              name='surname'
              value={values.surname}
              autoComplete='disabled'
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl variant='outlined' className={classes.formControl}>
              <InputLabel id='demo-simple-select-outlined-label'>
                Rol
              </InputLabel>
              <Select
                name='roleId'
                required
                label='Rol'
                // defaultValue={values.role.name}
                value={values.roleId}
                onChange={(e) => handleInputChange(e)}
                autoComplete='disabled'
              >
                {roles
                  ? roles.map((role) => {
                      if (role.name !== 'admin')
                        return <MenuItem value={role.id}>{role.name}</MenuItem>
                    })
                  : null}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={4}>
            <Button
              type='submit'
              color='primary'
              variant='contained'
              onClick={(e) => handleSubmitUpdate(e)}
            >
              Confirmar
            </Button>
          </Grid>

          <Grid item xs={4}>
            <Button
              onClick={() => handleClose()}
              color='primary'
              variant='contained'
            >
              Cerrar
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}
