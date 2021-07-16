import { Grid, TextField, makeStyles, Button } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

/* 
name  surname email country state bio img rating  favoriteArea1, 2 y 3 y seniority 
*/

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
  const history = useHistory()
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
          <TextField
            variant='outlined'
            label='favoriteArea1'
            name='favoriteArea1'
            defaultValue={values.favoriteArea1}
          />{' '}
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant='outlined'
            label='favoriteArea2'
            name='favoriteArea2'
            defaultValue={values.favoriteArea2}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant='outlined'
            label='favoriteArea3'
            name='favoriteArea3'
            defaultValue={values.favoriteArea3}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant='outlined'
            label='Seniority'
            name='seniority1'
            defaultValue={values.seniority1}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant='outlined'
            label='Seniority'
            name='seniority2'
            defaultValue={values.seniority2}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant='outlined'
            label='Seniority'
            name='seniority3'
            defaultValue={values.seniority3}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant='outlined'
            label='Bio'
            name='bio'
            defaultValue={values.bio}
          />
        </Grid>
        <Button
          type='submit'
          variant='contained'
          color='primary'
          label='Add'
          style={{
            border: '1px solid white',
            borderRadius: '10px',
            width: '10%',
            margin: '10px auto',
          }}
        >
          Confirm
        </Button>
        <Button
          onClick={handleClose}
          variant='contained'
          color='primary'
          label='Add'
          style={{
            border: '1px solid white',
            borderRadius: '10px',
            width: '10%',
            margin: '10px auto',
          }}
        >
          Cancel
        </Button>
      </Grid>
    </form>
  )
}

export default UpdateForm
