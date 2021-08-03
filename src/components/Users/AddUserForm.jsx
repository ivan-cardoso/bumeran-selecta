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
import styles from '../Jobs/index.module.css'
import { useDispatch, useSelector } from 'react-redux'
import ImageUpload from '../RecruiterForm/ImageUpload'
import { getAllAditionalData } from '../../store/aditionalData/actions'

export default function AddCompaniesForm({
  values,
  setValues,
  handleInputChange,
  handleSubmit,
  handleClose,
  warning,
}) {
  const dispatch = useDispatch()
  const classes = useStyles()

  const { roles } = useSelector((state) => state.aditionalData)

  React.useEffect(() => {
    dispatch(getAllAditionalData())
  }, [dispatch])
  return (
    <>
      <form
        onChange={(e) => handleInputChange(e)}
        className={classes.root}
        onSubmit={handleSubmit}
      >
        <Grid item xs={8}>
          <ImageUpload setValues={setValues} values={values} />
        </Grid>
        <Grid container spacing={12}>
          <Grid item xs={4}>
            <TextField
              variant='outlined'
              label='Nombre'
              name='name'
              value={values.name}
              autoComplete='disabled'
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              variant='outlined'
              label='Apellido'
              name='surname'
              value={values.surname}
              autoComplete='disabled'
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              variant='outlined'
              label='Email'
              type='email'
              name='email'
              value={values.email}
              autoComplete='disabled'
            />
          </Grid>
          <Grid item xs={4}>
            <FormControl variant='outlined' className={classes.formControl}>
              <InputLabel id='demo-simple-select-outlined-label'>
                Rol
              </InputLabel>
              <Select
                name='role'
                onChange={handleInputChange}
                required
                label='Rol'
                autoComplete='disabled'
              >
                <MenuItem className={styles.menuItemSelect} disable>
                  <em>Seleccione Rol</em>
                </MenuItem>

                {roles &&
                  roles.map((roles) => {
                    return <MenuItem value={roles.name}>{roles.name}</MenuItem>
                  })}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={4}>
            <TextField
              variant='outlined'
              label='Password'
              name='password'
              value={values.password}
              autoComplete='disabled'
              type='password'
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              variant='outlined'
              label='Repetir contrasena'
              autoComplete='disabled'
              name='secondpassword'
              value={values.secondpassword}
              type='password'
            />
          </Grid>

          <Grid item xs={12}>
            {warning}
          </Grid>
          <Grid item xs={4}>
            <Button type='submit' color='primary' variant='contained'>
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
