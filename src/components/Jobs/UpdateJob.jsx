import React, { useState, useEffect } from 'react'
import {
  CircularProgress,
  Grid,
  TextField,
  Button,
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  Input,
  MenuItem,
  useTheme,
} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { createJob, getAllJobs, updateJob } from '../../store/jobs/jobs'
import { getCompanies } from '../../store/companies/companies'
import { getAllAditionalData } from '../../store/aditionalData/actions'
import styles from './index.module.css'
import useModal from './useModal'
import { message } from 'antd'

const UpdateJob = ({ job, handleClose }) => {
  const { setOpen, setOpenUpdate } = useModal()

  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiFormControl-root': {
        width: '80%',
        margin: theme.spacing(1),
      },
      input: {
        display: 'none',
      },
      '& > *': {
        margin: theme.spacing(1),
      },
      button: {
        margin: theme.spacing(1),
      },
    },
  }))
  const classes = useStyles()

  const initialValues = {
    title: job.title,
    areaId: job.areaId,
    seniorityId: job.seniorityId,
    country: job.country,
    stateId: job.stateId,
    typeemloyedId: job.typeemloyedId,
    salary: job.salary,
    modalityId: job.modalityId,
    description: job.description,
    companyId: job.companyId,
  }
  const [values, setValues] = useState(initialValues)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(updateJob({ id: job.id, values })).then((value) => {
      console.log(value)
      if (value.payload) {
        handleClose()
        dispatch(getAllJobs())
        message.success('Búsqueda actualizada correctamente')
      }
    })
  }

  const theme = useTheme()

  const countryArr = ['Argentina']

  const { aditionalData } = useSelector((state) => state)
  const { areas, modalities, seniorities, states, type } = aditionalData
  const { companies } = useSelector((state) => state)

  useEffect(() => {
    dispatch(getAllAditionalData())
    dispatch(getCompanies())
  }, [dispatch])

  return (
    <>
      {aditionalData.areas ? (
        <>
          <form onSubmit={(e) => handleSubmit(e)} className={classes.root}>
            <Grid container spacing={12}>
              <Grid item xs={4}>
                <FormControl variant='outlined' className={classes.formControl}>
                  <InputLabel id='demo-simple-select-outlined-label'>
                    Compania
                  </InputLabel>
                  <Select
                    name='companyId'
                    value={job.company.id}
                    onChange={handleChange}
                    required
                    label='Compania'
                    autoComplete='disabled'
                  >
                    <MenuItem
                      className={styles.menuItemSelect}
                      value=''
                      disable
                    >
                      <em>Seleccione compania</em>
                    </MenuItem>
                    {companies.map((company) => {
                      return (
                        <MenuItem value={company.id}>{company.name}</MenuItem>
                      )
                    })}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={4}>
                <TextField
                  variant='outlined'
                  label='Título'
                  name='title'
                  onChange={handleChange}
                  defaultValue={job.title}
                  required
                  placeholder='Ej: Front-End Developer'
                  autoComplete='disabled'
                />
              </Grid>

              <Grid item xs={4}>
                <FormControl variant='outlined' className={classes.formControl}>
                  <InputLabel id='demo-simple-select-outlined-label'>
                    Area
                  </InputLabel>
                  <Select
                    name='areaId'
                    defaultValue={job.areaId}
                    onChange={handleChange}
                    required
                    label='Area'
                    autoComplete='disabled'
                  >
                    <MenuItem
                      className={styles.menuItemSelect}
                      value=''
                      disable
                    >
                      <em>Seleccione area</em>
                    </MenuItem>
                    {areas.map((area) => {
                      return <MenuItem value={area.id}>{area.name}</MenuItem>
                    })}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={4}>
                <FormControl variant='outlined' className={classes.formControl}>
                  <InputLabel id='demo-simple-select-outlined-label'>
                    Seniority
                  </InputLabel>
                  <Select
                    name='seniorityId'
                    onChange={handleChange}
                    defaultValue={job.seniorityId}
                    required
                    label='Seniority'
                    autoComplete='disabled'
                  >
                    <MenuItem
                      className={styles.menuItemSelect}
                      value=''
                      disable
                    >
                      <em>Seleccione seniority</em>
                    </MenuItem>
                    {seniorities.map((seniority) => {
                      return (
                        <MenuItem value={seniority.id}>
                          {seniority.name}
                        </MenuItem>
                      )
                    })}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={4}>
                <FormControl variant='outlined' className={classes.formControl}>
                  <InputLabel id='demo-simple-select-outlined-label'>
                    País
                  </InputLabel>
                  <Select
                    name='country'
                    onChange={handleChange}
                    required
                    defaultValue={'Argentina'}
                    label='País'
                    autoComplete='disabled'
                  >
                    <MenuItem
                      className={styles.menuItemSelect}
                      value=''
                      disable
                    >
                      <em>Seleccione país</em>
                    </MenuItem>
                    {countryArr.map((country) => {
                      return <MenuItem value={country}>{country}</MenuItem>
                    })}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={4}>
                <FormControl variant='outlined' className={classes.formControl}>
                  <InputLabel id='demo-simple-select-outlined-label'>
                    Provincia
                  </InputLabel>
                  <Select
                    name='stateId'
                    onChange={handleChange}
                    required
                    defaultValue={job.stateId}
                    label='Provincia'
                    autoComplete='disabled'
                  >
                    <MenuItem
                      className={styles.menuItemSelect}
                      value=''
                      disable
                    >
                      <em>Seleccione provincia</em>
                    </MenuItem>
                    {states.map((state) => {
                      return <MenuItem value={state.id}>{state.name}</MenuItem>
                    })}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={4}>
                <FormControl variant='outlined' className={classes.formControl}>
                  <InputLabel id='demo-simple-select-outlined-label'>
                    Tipo de empleo
                  </InputLabel>
                  <Select
                    name='typeemloyedId'
                    onChange={handleChange}
                    defaultValue={job.typeemloyedId}
                    required
                    label='Tipo de empleo'
                    autoComplete='disabled'
                  >
                    <MenuItem
                      value=''
                      className={styles.menuItemSelect}
                      disable
                    >
                      <em>Seleccione tipo de empleo</em>
                    </MenuItem>
                    {type.map((typeEmployed) => {
                      return (
                        <MenuItem value={typeEmployed.id}>
                          {typeEmployed.name}
                        </MenuItem>
                      )
                    })}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={4}>
                <TextField
                  variant='outlined'
                  label='Salario'
                  name='salary'
                  type='number'
                  defaultValue={job.salary}
                  onChange={handleChange}
                  autoComplete='disabled'
                />
              </Grid>

              <Grid item xs={4}>
                <FormControl variant='outlined' className={classes.formControl}>
                  <InputLabel id='demo-simple-select-outlined-label'>
                    Modalidad
                  </InputLabel>
                  <Select
                    name='modalityId'
                    onChange={handleChange}
                    defaultValue={job.modalityId}
                    required
                    label='Modalidad'
                    autoComplete='disabled'
                  >
                    <MenuItem
                      value=''
                      className={styles.menuItemSelect}
                      disable
                    >
                      <em>Seleccione modalidad</em>
                    </MenuItem>
                    {modalities.map((modality) => {
                      return (
                        <MenuItem value={modality.id}>{modality.name}</MenuItem>
                      )
                    })}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label='Descripción'
                  multiline
                  rows={6}
                  name='description'
                  variant='outlined'
                  defaultValue={job.description}
                  onChange={handleChange}
                  required
                  className={styles.formControlDescription}
                  autoComplete='disabled'
                />
              </Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={4}>
                <Button type="submit" color="primary" variant="contained">
                  Confirmar
                </Button>
              </Grid>

              <Grid item xs={4}>
                <Button
                  onClick={() => handleClose()}
                  color="primary"
                  variant="contained"
                >
                  Cancelar
                </Button>
              </Grid>
            </Grid>
          </form>
        </>
      ) : (
        <Grid continer spacing={12}>
          <Grid item xs={3}>
            <CircularProgress />
          </Grid>
        </Grid>
      )}
    </>
  )
}

export default UpdateJob
