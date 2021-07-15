import { Grid, TextField, makeStyles, Button } from '@material-ui/core'
import React, { useState } from 'react'

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

const UpdateForm = ({ handleSubmit, values }) => {
  const classes = useStyles()

  const [updateValues, setUpdateValues] = useState(values)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUpdateValues({
      ...updateValues,
      [name]: value,
    })
  }
  return (
    <form
      onChange={(e) => handleInputChange(e)}
      className={classes.root}
      onSubmit={(e) => {
        handleSubmit(e, updateValues)
      }}
    >
      <Grid container>
        <Grid item xs={6}>
          <TextField
            variant='outlined'
            label='Name'
            name='name'
            defaultValue={values.name}
          />

          <TextField
            variant='outlined'
            label='Surname'
            name='surname'
            defaultValue={values.surname}
          />

          <TextField
            variant='outlined'
            label='Email'
            type='email'
            name='email'
            defaultValue={values.email}
          />

          <TextField
            variant='outlined'
            label='Country'
            name='country'
            defaultValue={values.country}
          />

          <TextField
            variant='outlined'
            label='State'
            name='state'
            defaultValue={values.state}
          />

          <TextField
            variant='outlined'
            label='Bio'
            name='bio'
            defaultValue={values.bio}
          />

          <TextField
            variant='outlined'
            label='Img'
            name='img'
            defaultValue={values.img}
          />

          <TextField
            variant='outlined'
            label='favoriteArea1'
            name='favoriteArea1'
            defaultValue={values.favoriteArea1}
          />

          <TextField
            variant='outlined'
            label='favoriteArea2'
            name='favoriteArea2'
            defaultValue={values.favoriteArea2}
          />

          <TextField
            variant='outlined'
            label='favoriteArea3'
            name='favoriteArea3'
            defaultValue={values.favoriteArea3}
          />

          <TextField
            variant='outlined'
            label='Seniority'
            name='seniority1'
            defaultValue={values.seniority1}
          />

          <TextField
            variant='outlined'
            label='Seniority'
            name='seniority2'
            defaultValue={values.seniority2}
          />

          <TextField
            variant='outlined'
            label='Seniority'
            name='seniority3'
            defaultValue={values.seniority3}
          />
        </Grid>

        <Grid item xs={6}></Grid>

        <Button
          type='submit'
          variant='contained'
          color='secondary'
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
      </Grid>
    </form>
  )
}

export default UpdateForm
