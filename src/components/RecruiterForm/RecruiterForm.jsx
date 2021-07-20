import {
  Grid,
  TextField,
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core'
import React from 'react'
import s from './index.module.css'
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
  const seniorityArr = ['Senior', 'Semi-Senior', 'Junior', 'Trainee']
  const favArea = [
    'Ingenierías',
    'Comercial, Ventas y Negocios',
    'Gerencia y Dirección General',
    'Administración, Contabilidad y Finanzas',
    'Recursos Humanos y Capacitación',
    'Minería, Petróleo y Gas',
    'Seguros',
    'Tecnología, Sistemas y Telecomunicaciones',
    'Salud, Medicina, Enfermería y Farmacia',
    'Marketing y Publicidad',
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
    console.log(values)
  }
  return (
    <form
      onChange={(e) => handleInputChange(e)}
      className={classes.root}
      onSubmit={(e) => {
        handleSubmit(e)
      }}
    >
      <Grid container spacing={12}>
        <Grid item xs={4}>
          <TextField
            variant='outlined'
            label='Name'
            name='name'
            value={values.name}
            // defaultValue={values.name}
            // onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={4}>
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

        <Grid item xs={4}>
          <TextField
            variant='outlined'
            label='Img'
            name='img'
            value={values.img}
            // onChange={handleInputChange}
          />{' '}
        </Grid>

        <Grid item xs={4}>
          <FormControl variant='outlined' className={classes.formControl}>
            <InputLabel id='demo-simple-select-outlined-label'>
              Favourite Area
            </InputLabel>
            <Select
              name='favoriteArea1'
              required
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
              Favourite Area
            </InputLabel>
            <Select
              name='favoriteArea2'
              required
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
              Favourite Area
            </InputLabel>
            <Select
              name='favoriteArea3'
              required
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
              Seniority
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
              Seniority
            </InputLabel>
            <Select
              name='seniority2'
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
              Seniority
            </InputLabel>
            <Select
              name='seniority3'
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

        {/*  <TextField
            variant="outlined"
            label="Img"
            name="img"
            value={values.img}
            onChange={handleInputChange}
          /> */}

        <input
          style={{ display: 'none' }}
          id='contained-button-file'
          type='file'
        />
        {/* <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span" value={values.img}
            onChange={handleInputChange}>
              Upload Image
            </Button>
          </label> */}

        <Grid item xs={12}>
          <TextField
            variant='outlined'
            label='Bio'
            name='bio'
            value={values.bio}
            // onChange={handleInputChange}
          />{' '}
        </Grid>
        {/* <div className={classes.root}></div> */}

        <BtnConfirmRecruiter name='Confirm'></BtnConfirmRecruiter>
      </Grid>
    </form>
  )
}

export default RecruiterForm
