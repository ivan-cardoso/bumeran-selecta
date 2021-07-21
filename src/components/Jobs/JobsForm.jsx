import React, { useState, useEffect } from 'react'
import { CircularProgress, Grid, TextField, Button, makeStyles, FormControl, InputLabel, Select, Input, MenuItem, useTheme } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux"
import { createJob, getAllJobs } from "../../store/jobs/jobs"
import {getCompanies} from "../../store/companies/companies"
import { getAllAditionalData } from "../../store/aditionalData/actions"
import styles from "./index.module.css"

const JobsForm = ({values, handleChange, handleSubmit}) => {

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


    //Ejemplo
    const classes = useStyles();
    const theme = useTheme();

    // const [inputValues, setInputValues] = useState({})
    const dispatch = useDispatch()

    const countryArr = ["Argentina"]

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setInputValues({
    //         ...inputValues,
    //         [name]: value
    //     })
    // };
    const { aditionalData } = useSelector((state) => state)
    const {areas, modalities, seniorities, states, type } = aditionalData
  const { companies, singleCompany } = useSelector((state) => state);
  values.companyId = singleCompany.id;
  
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     dispatch(createJob(inputValues)).then((res) => console.log(res.data))
    // }

    useEffect(()=>{
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

                  {singleCompany.id ? (
                    <TextField
                      variant="outlined"
                      label="Compania"
                      value={singleCompany.name}
                      defaultValue={singleCompany.id}
                      name="companyId"
                      onChange={handleChange}
                      disabled
                    />
                  ) : (
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel id="demo-simple-select-outlined-label">
                        Compania
                      </InputLabel>

                      <Select
                        name="companyId"
                        onChange={handleChange}
                        required
                        label="Compania"
                      >
                        <MenuItem className={styles.menuItemSelect} disable>
                          <em>Seleccione compania</em>
                        </MenuItem>
                        ,
                        {companies.map((company) => {
                          return (
                            <MenuItem value={company.id}>
                              {company.name}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  )}
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    variant="outlined"
                    label="Título"
                    name="title"
                    onChange={handleChange}
                    value={values.title}
                    required
                    placeholder="Ej: Front-End Developer"
                  />
                </Grid>

                <Grid item xs={4}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Area
                    </InputLabel>
                    <Select
                      name="areaId"
                      onChange={handleChange}
                      required
                      label="Area"
                    >
                      <MenuItem
                        className={styles.menuItemSelect}
                        value=""
                        disable
                      >
                        <em>Seleccione area</em>
                      </MenuItem>
                      {areas.map((area) => {
                        return <MenuItem value={area.id}>{area.name}</MenuItem>;
                      })}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={4}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Seniority
                    </InputLabel>
                    <Select
                      name="seniorityId"
                      onChange={handleChange}
                      required
                      label="Seniority"
                    >
                      <MenuItem
                        className={styles.menuItemSelect}
                        value=""
                        disable
                      >
                        <em>Seleccione seniority</em>
                      </MenuItem>
                      {seniorities.map((seniority) => {
                        return (
                          <MenuItem value={seniority.id}>
                            {seniority.name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={4}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      País
                    </InputLabel>
                    <Select
                      name="country"
                      onChange={handleChange}
                      required
                      label="País"
                    >
                      <MenuItem
                        className={styles.menuItemSelect}
                        value=""
                        disable
                      >
                        <em>Seleccione país</em>
                      </MenuItem>
                      {countryArr.map((country) => {
                        return <MenuItem value={country}>{country}</MenuItem>;
                      })}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={4}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Provincia
                    </InputLabel>
                    <Select
                      name="stateId"
                      onChange={handleChange}
                      required
                      label="Provincia"
                    >
                      <MenuItem
                        className={styles.menuItemSelect}
                        value=""
                        disable
                      >
                        <em>Seleccione provincia</em>
                      </MenuItem>
                      {states.map((state) => {
                        return (
                          <MenuItem value={state.id}>{state.name}</MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={4}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Tipo de empleo
                    </InputLabel>
                    <Select
                      name="typeemloyedId"
                      onChange={handleChange}
                      required
                      label="Tipo de empleo"
                    >
                      <MenuItem
                        value=""
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
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    variant="outlined"
                    label="Salario"
                    name="salary"
                    type="number"
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={4}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Modalidad
                    </InputLabel>
                    <Select
                      name="modalityId"
                      onChange={handleChange}
                      required
                      label="Modalidad"
                    >
                      <MenuItem
                        value=""
                        className={styles.menuItemSelect}
                        disable
                      >
                        <em>Seleccione modalidad</em>
                      </MenuItem>
                      {modalities.map((modality) => {
                        return (
                          <MenuItem value={modality.id}>
                            {modality.name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  {/* <TextField
                            variant="outlined"
                            label="Descripción"
                            name="description"
                            required
                            onChange={handleChange}
                        /> */}
                  <TextField
                    label="Descripción"
                    multiline
                    rows={6}
                    name="description"
                    variant="outlined"
                    value={values.description}
                    onChange={handleChange}
                    required
                    className={styles.formControlDescription}
                  />
                </Grid>

                <Grid item xs={3}>
                  <Button type="submit" color="secondary" variant="contained">
                    Confirm
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
    );
}

export default JobsForm
