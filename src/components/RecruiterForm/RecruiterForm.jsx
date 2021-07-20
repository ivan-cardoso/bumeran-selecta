import {
  Grid,
  TextField,
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core'
import React, { useState } from 'react'
import s from './index.module.css'
import { seniorityArr, favArea } from './options'
import ImageUpload from './ImageUpload'
import BtnConfirmRecruiter from '../UX/Buttons/BtnConfirmRecruiter'

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
  // const [favOptions, setFavOptions] = useState(favArea)
  // const [restOptions, setRestOptions] = useState(favArea)

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
              name='name'
              value={values.name}
              // defaultValue={values.name}
              // onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant='outlined'
              label='Surname'
              name='surname'
              value={values.surname}
              // onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              variant='outlined'
              label='Email'
              type='email'
              name='email'
              value={values.email}
              // onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              variant='outlined'
              label='Country'
              name='country'
              value={values.country}
              // onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              variant='outlined'
              label='State'
              name='state'
              value={values.state}
              // onChange={handleInputChange}
            />{' '}
          </Grid>
          {/* <Grid item xs={4}>
            <TextField
              variant='outlined'
              label='Img'
              name='img'
              value={values.img}
              // onChange={handleInputChange}
            />{' '}
          </Grid> */}
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
              >
                {favArea.map((favrArea) => {
                  return <MenuItem value={favrArea}>{favrArea}</MenuItem>
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
              >
                {favArea.map((seniority) => {
                  return <MenuItem value={seniority}>{seniority}</MenuItem>
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
              >
                {favArea.map((seniority) => {
                  return <MenuItem value={seniority}>{seniority}</MenuItem>
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
              >
                {seniorityArr.map((seniority) => {
                  return <MenuItem value={seniority}>{seniority}</MenuItem>
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
              >
                {seniorityArr.map((seniority) => {
                  return <MenuItem value={seniority}>{seniority}</MenuItem>
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
              >
                {seniorityArr.map((seniority) => {
                  return <MenuItem value={seniority}>{seniority}</MenuItem>
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
              // onChange={handleInputChange}
            />{' '}
          </Grid>
          {/* <div className={classes.root}></div> */}
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
