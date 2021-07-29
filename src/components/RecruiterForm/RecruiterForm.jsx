import {
  Grid,
  TextField,
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core'
import React, { useEffect } from 'react'
import s from './index.module.css'
import ImageUpload from './ImageUpload'
import BtnConfirmRecruiter from '../UX/Buttons/BtnConfirmRecruiter'
import { useSelector, useDispatch } from 'react-redux'
import { getAllAditionalData } from '../../store/aditionalData/actions'
import { useState } from 'react'

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

const RecruiterForm = ({ handleSubmit, values, setValues }) => {
  const classes = useStyles()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllAditionalData())
  }, [dispatch])

  const { aditionalData } = useSelector((state) => state)
  const { areas, modalities, seniorities, states, type } = aditionalData
  const countryArr = ['Argentina']

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setValues({
      ...values,
      [name]: value,
    })
  }

  return (
    <>
      <form
        onChange={(e) => handleInputChange(e)}
        className={classes.root}
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(e)
        }}
      >
        <Grid container spacing={12}>
          <Grid item xs={6}>
            <TextField
              variant='outlined'
              label='Name'
              required
              name='name'
              value={values.name}
              autoComplete='disabled'
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant='outlined'
              label='Surname'
              required
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
              required
              name='email'
              value={values.email}
              autoComplete='disabled'
            />
          </Grid>
          <Grid item xs={4}>
            <FormControl variant='outlined' className={classes.formControl}>
              <InputLabel id='demo-simple-select-outlined-label'>
                País
              </InputLabel>
              <Select
                name='country'
                required
                label='País'
                onChange={(e) => handleInputChange(e)}
                autoComplete='disabled'
              >
                <MenuItem value='' disable>
                  <em>Seleccione país</em>
                </MenuItem>
                {countryArr.length &&
                  countryArr.map((country) => {
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
                onChange={(e) => handleInputChange(e)}
                required
                label='Provincia'
                autoComplete='disabled'
              >
                <MenuItem value='' disable>
                  <em>Seleccione provincia</em>
                </MenuItem>
                {states &&
                  states.map((state) => {
                    return <MenuItem value={state.id}>{state.name}</MenuItem>
                  })}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={4}>
            <FormControl variant='outlined' className={classes.formControl}>
              <InputLabel id='demo-simple-select-outlined-label'>
                Favourite Area 1
              </InputLabel>
              <Select
                name='favoriteArea1'
                required
                label='Favourite Area'
                onChange={(e) => handleInputChange(e)}
                autoComplete='disabled'
              >
                {areas &&
                  areas.map((area) => {
                    const { name, id } = area
                    return <MenuItem value={name}>{name}</MenuItem>
                  })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl variant='outlined' className={classes.formControl}>
              <InputLabel id='demo-simple-select-outlined-label'>
                Favourite Area 2
              </InputLabel>
              <Select
                name='favoriteArea2'
                label='Favourite Area'
                onChange={(e) => handleInputChange(e)}
                autoComplete='disabled'
              >
                {areas &&
                  areas.map((area) => {
                    const { name, id } = area
                    return <MenuItem value={name}>{name}</MenuItem>
                  })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl variant='outlined' className={classes.formControl}>
              <InputLabel id='demo-simple-select-outlined-label'>
                Favourite Area 3
              </InputLabel>
              <Select
                name='favoriteArea3'
                label='Favourite Area'
                onChange={(e) => handleInputChange(e)}
                autoComplete='disabled'
              >
                {areas &&
                  areas.map((area) => {
                    const { name, id } = area
                    return <MenuItem value={name}>{name}</MenuItem>
                  })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl variant='outlined' className={classes.formControl}>
              <InputLabel id='demo-simple-select-outlined-label'>
                Seniority 1
              </InputLabel>
              <Select
                name='seniority1'
                required
                label='Seniority'
                onChange={(e) => handleInputChange(e)}
                autoComplete='disabled'
              >
                {seniorities &&
                  seniorities.map((seniority) => {
                    const { name, id } = seniority
                    return <MenuItem value={name}>{name}</MenuItem>
                  })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl variant='outlined' className={classes.formControl}>
              <InputLabel id='demo-simple-select-outlined-label'>
                Seniority 2
              </InputLabel>
              <Select
                name='seniority2'
                label='Seniority'
                onChange={(e) => handleInputChange(e)}
                autoComplete='disabled'
              >
                {seniorities &&
                  seniorities.map((seniority) => {
                    const { name, id } = seniority

                    return <MenuItem value={name}>{name}</MenuItem>
                  })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl variant='outlined' className={classes.formControl}>
              <InputLabel id='demo-simple-select-outlined-label'>
                Seniority 3
              </InputLabel>
              <Select
                name='seniority3'
                label='Seniority'
                onChange={(e) => handleInputChange(e)}
                autoComplete='disabled'
              >
                {seniorities &&
                  seniorities.map((seniority) => {
                    const { name, id } = seniority
                    return <MenuItem value={name}>{name}</MenuItem>
                  })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              label='Bio'
              name='bio'
              required
              value={values.bio}
              autoComplete='disabled'
            />{' '}
          </Grid>

          <Grid item xs={5}></Grid>
          <Grid item xs={5}>
            <BtnConfirmRecruiter
              type='submit'
              variant='contained'
              color='primary'
              name='confirmar'
              label='Add'
              style={{
                border: '1px solid white',
                borderRadius: '10px',
                width: '10%',
                margin: '10px auto',
              }}
            >
              Confirm
            </BtnConfirmRecruiter>
          </Grid>
        </Grid>
      </form>
      <div>
        <ImageUpload setValues={setValues} values={values} />
      </div>
    </>
  )
}

export default RecruiterForm
