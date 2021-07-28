import {
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
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ImageUpload from './ImageUpload'

import { getAllAditionalData } from '../../store/aditionalData/actions'

import BtnConfirmRecruiter from '../UX/Buttons/BtnConfirmRecruiter'
import BtnCancelEdit from '../UX/Buttons/BtnCancelEdit'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1),
    },
  },
}))

const UpdateForm = ({ handleSubmit, values, setShowTable }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllAditionalData())
  }, [dispatch])
  //const history = useHistory()
  const [updateValues, setUpdateValues] = useState(values)

  const { aditionalData } = useSelector((state) => state)
  const { areas, modalities, seniorities, states, type } = aditionalData
  const countryArr = ['Argentina']

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUpdateValues({
      ...updateValues,
      [name]: value,
    })
  }
  const handleClose = (e) => {
    e.preventDefault()
    setShowTable(true)
  }

  console.log(values)
  return (
    <>
      <div>
        <ImageUpload setValues={setUpdateValues} values={updateValues} />
      </div>
      <form
        onChange={(e) => handleInputChange(e)}
        className={classes.root}
        onSubmit={(e) => {
          handleSubmit(e, updateValues)
        }}
      >
        <Grid container spacing={12}>
          <Grid item xs={6}>
            <TextField
              variant='outlined'
              label='Name'
              name='name'
              defaultValue={values.name}
              autoComplete='disabled'
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant='outlined'
              label='Surname'
              name='surname'
              defaultValue={values.surname}
              autoComplete='disabled'
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              variant='outlined'
              label='Email'
              type='email'
              name='email'
              defaultValue={values.email}
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
                defaultValue={values.country}
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
                name='state'
                onChange={(e) => handleInputChange(e)}
                required
                label='Provincia'
                defaultValue={values.state}
                autoComplete='disabled'
              >
                <MenuItem value='' disable>
                  <em>Seleccione provincia</em>
                </MenuItem>
                {states &&
                  states.map((state) => {
                    return <MenuItem value={state.name}>{state.name}</MenuItem>
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
                defaultValue={values.favoriteArea1}
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
                required
                defaultValue={values.favoriteArea2}
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
                required
                defaultValue={values.favoriteArea3}
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
                defaultValue={values.seniority1}
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
                required
                label='Seniority'
                defaultValue={values.seniority2}
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
                required
                defaultValue={values.seniority3}
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
              defaultValue={values.bio}
              autoComplete='disabled'
            />
          </Grid>
          <BtnConfirmRecruiter name='Confirm'></BtnConfirmRecruiter>
          <BtnCancelEdit onClick={handleClose} name='Cancel'></BtnCancelEdit>
        </Grid>
      </form>
    </>
  )
}

export default UpdateForm
