import {
  Grid,
  TextField,
  Button,
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ImageUpload from './ImageUpload'
import { getAllAditionalData } from '../../store/aditionalData/actions'


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1),
    },
  },
}))

const UpdateForm = ({
  values,
  setValues,
  handleInputChange,
  handleSubmit,
  handleClose,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAditionalData());
  }, [dispatch]);
  //const history = useHistory()

  const { aditionalData } = useSelector((state) => state);
  const { areas, seniorities, states } = aditionalData;
  const countryArr = ["Argentina"];


  return (
    <>
      <div>
        <ImageUpload setValues={setValues} values={values} />
      </div>
      <form
        onChange={(e) => handleInputChange(e)}
        className={classes.root}
        onSubmit={(e) => {
          handleClose();
          handleSubmit(e, values);
        }}
      >
        <Grid container spacing={12}>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              label="Name"
              name="name"
              defaultValue={values.name}
              autoComplete="disabled"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              label="Surname"
              name="surname"
              defaultValue={values.surname}
              autoComplete="disabled"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              variant="outlined"
              label="Email"
              type="email"
              name="email"
              defaultValue={values.email}
              autoComplete="disabled"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                País
              </InputLabel>
              <Select
                name="country"
                required
                label="País"
                onChange={(e) => handleInputChange(e)}
                defaultValue={values.country}
                autoComplete="disabled"
              >
                <MenuItem value="" disable>
                  <em>Seleccione país</em>
                </MenuItem>
                {countryArr.length &&
                  countryArr.map((country) => {
                    return <MenuItem value={country}>{country}</MenuItem>;
                  })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Provincia
              </InputLabel>
              <Select
                name="stateId"
                onChange={(e) => handleInputChange(e)}
                required
                label="Provincia"
                value={values.stateId}
                autoComplete="disabled"
              >
                <MenuItem value={values.stateId} disable>
                  <em>Seleccione provincia</em>
                </MenuItem>
                {states &&
                  states.map((state) => {
                    return <MenuItem value={state.id}>{state.name}</MenuItem>;
                  })}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={4}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Favourite Area 1
              </InputLabel>
              <Select
                name="favoriteArea1"
                required
                label="Favourite Area"
                defaultValue={values.favoriteArea1}
                onChange={(e) => handleInputChange(e)}
                autoComplete="disabled"
              >
                {areas &&
                  areas.map((area) => {
                    const { name } = area;
                    return <MenuItem value={name}>{name}</MenuItem>;
                  })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Favourite Area 2
              </InputLabel>
              <Select
                name="favoriteArea2"
                required
                defaultValue={values.favoriteArea2}
                label="Favourite Area"
                onChange={(e) => handleInputChange(e)}
                autoComplete="disabled"
              >
                {areas &&
                  areas.map((area) => {
                    const { name } = area;
                    return <MenuItem value={name}>{name}</MenuItem>;
                  })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Favourite Area 3
              </InputLabel>
              <Select
                name="favoriteArea3"
                required
                defaultValue={values.favoriteArea3}
                label="Favourite Area"
                onChange={(e) => handleInputChange(e)}
                autoComplete="disabled"
              >
                {areas &&
                  areas.map((area) => {
                    const { name } = area;
                    return <MenuItem value={name}>{name}</MenuItem>;
                  })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Seniority 1
              </InputLabel>
              <Select
                name="seniority1"
                required
                label="Seniority"
                defaultValue={values.seniority1}
                onChange={(e) => handleInputChange(e)}
                autoComplete="disabled"
              >
                {seniorities &&
                  seniorities.map((seniority) => {
                    const { name } = seniority;
                    return <MenuItem value={name}>{name}</MenuItem>;
                  })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Seniority 2
              </InputLabel>
              <Select
                name="seniority2"
                required
                label="Seniority"
                defaultValue={values.seniority2}
                onChange={(e) => handleInputChange(e)}
                autoComplete="disabled"
              >
                {seniorities &&
                  seniorities.map((seniority) => {
                    const { name } = seniority;
                    return <MenuItem value={name}>{name}</MenuItem>;
                  })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Seniority 3
              </InputLabel>
              <Select
                name="seniority3"
                required
                defaultValue={values.seniority3}
                label="Seniority"
                onChange={(e) => handleInputChange(e)}
                autoComplete="disabled"
              >
                {seniorities &&
                  seniorities.map((seniority) => {
                    const { name } = seniority;
                    return <MenuItem value={name}>{name}</MenuItem>;
                  })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              label="Bio"
              name="bio"
              defaultValue={values.bio}
              autoComplete="disabled"
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
              Cerrar
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default UpdateForm
