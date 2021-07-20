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
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { seniorityArr, favArea } from './options'

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

  //const history = useHistory()
  const [updateValues, setUpdateValues] = useState(values)

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
  return (
    <form
      onChange={(e) => handleInputChange(e)}
      className={classes.root}
      onSubmit={(e) => {
        handleSubmit(e, updateValues)
      }}
    >
      <Grid container spacing={12}>
        <Grid item xs={4}>
          <TextField
            variant='outlined'
            label='Name'
            name='name'
            defaultValue={values.name}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant='outlined'
            label='Surname'
            name='surname'
            defaultValue={values.surname}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant='outlined'
            label='Email'
            type='email'
            name='email'
            defaultValue={values.email}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant='outlined'
            label='Country'
            name='country'
            defaultValue={values.country}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant='outlined'
            label='State'
            name='state'
            defaultValue={values.state}
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            variant='outlined'
            label='Img'
            name='img'
            defaultValue={values.img}
          />
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
            >
              {favArea.map((seniority) => {
                return <MenuItem value={seniority}>{seniority}</MenuItem>
              })}
            </Select>
          </FormControl>
          {/* <TextField
            variant='outlined'
            label='favoriteArea1'
            name='favoriteArea1'
            defaultValue={values.favoriteArea1}
          />{' '} */}
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
            >
              {favArea.map((seniority) => {
                return <MenuItem value={seniority}>{seniority}</MenuItem>
              })}
            </Select>
          </FormControl>
          {/* <TextField
            variant='outlined'
            label='favoriteArea2'
            name='favoriteArea2'
            defaultValue={values.favoriteArea2}
          /> */}
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
            >
              {favArea.map((seniority) => {
                return <MenuItem value={seniority}>{seniority}</MenuItem>
              })}
            </Select>
          </FormControl>
          {/* <TextField
            variant='outlined'
            label='favoriteArea3'
            name='favoriteArea3'
            defaultValue={values.favoriteArea3}
          />*/}
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
            >
              {seniorityArr.map((seniority) => {
                return <MenuItem value={seniority}>{seniority}</MenuItem>
              })}
            </Select>
          </FormControl>
          {/* <TextField
            variant='outlined'
            label='Seniority'
            name='seniority1'
            defaultValue={values.seniority1}
          /> */}
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
            >
              {seniorityArr.map((seniority) => {
                return <MenuItem value={seniority}>{seniority}</MenuItem>
              })}
            </Select>
          </FormControl>
          {/* <TextField
            variant='outlined'
            label='Seniority'
            name='seniority2'
            defaultValue={values.seniority2}
          /> */}
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
            >
              {seniorityArr.map((seniority) => {
                return <MenuItem value={seniority}>{seniority}</MenuItem>
              })}
            </Select>
          </FormControl>
          {/* <TextField
            variant='outlined'
            label='Seniority'
            name='seniority3'
            defaultValue={values.seniority3}
          />*/}
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant='outlined'
            label='Bio'
            name='bio'
            defaultValue={values.bio}
          />
        </Grid>
        <BtnConfirmRecruiter name='Confirm'></BtnConfirmRecruiter>
        <BtnCancelEdit onClick={handleClose} name='Cancel'></BtnCancelEdit>
      </Grid>
    </form>
  )
}

export default UpdateForm
