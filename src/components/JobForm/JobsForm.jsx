import React from 'react'
import { Grid, TextField, Button, makeStyles, FormControl, InputLabel, Select, Input, MenuItem, useTheme } from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux"
import {createJob} from "../../store/jobs/jobs"

const JobsForm = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
            "& .MuiFormControl-root": {
                width: "80%",
                margin: theme.spacing(1),
            },
        },
        button: {
            display: 'block',
            marginTop: theme.spacing(2),
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
    }));


    //Ejemplo
    const classes = useStyles();
    const theme = useTheme();

    const [inputValues, setInputValues] = React.useState({})
    const dispatch = useDispatch()

    const seniorityArr = ["Senior", "Semi-Senior", "Junior", "Trainee"]
    const countryArr = ["Argentina"]
    const typeOfEmployedArr = ["Fulltime", "Partime"]
    const modalityArr = ["Presencial", "Remota"]


    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValues({
            ...inputValues,
            [name]: value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createJob(inputValues))
    }

    return (
        <form onSubmit={handleSubmit} className={classes.root}>
            <Grid container>
                <Grid item xs={12} sm={6}>

                    <TextField
                        variant="outlined"
                        label="Empresa Fake"
                        
                        name="companyId"
                        onChange={handleChange}
                    />

                    <TextField
                        variant="outlined"
                        label="Título"
                        name="title"
                        onChange={handleChange}
                        required
                    />

                    <TextField
                        variant="outlined"
                        label="Área"
                        name="area"
                        onChange={handleChange}
                        required
                    />

                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Seniority</InputLabel>
                        <Select name="seniority" onChange={handleChange} required label="Seniority">
                            {seniorityArr.map((seniority) => {
                                return (
                                    <MenuItem value={seniority}>{seniority}</MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>

                    <TextField
                        variant="outlined"
                        label="Descripción"
                        name="description"
                        required
                        onChange={handleChange}
                    />

                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">País</InputLabel>
                        <Select name="country" onChange={handleChange} required label="País">
                            {countryArr.map((country) => {
                                return (
                                    <MenuItem value={country}>{country}</MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>

                    <TextField
                        variant="outlined"
                        label="Provincia"
                        name="state"
                        required
                        onChange={handleChange}
                    />

                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Tipo de empleo</InputLabel>
                        <Select name="typeOfEmployed" onChange={handleChange} required label="Tipo de empleo">
                            {typeOfEmployedArr.map((type) => {
                                return (
                                    <MenuItem value={type}>{type}</MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>

                    <TextField
                        variant="outlined"
                        label="Salario"
                        name="salary"
                        onChange={handleChange}
                    />

                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Modalidad</InputLabel>
                        <Select name="modality" onChange={handleChange} required label="Modalidad">
                            {modalityArr.map((modality) => {
                                return (
                                    <MenuItem value={modality}>{modality}</MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>

                    <Button type="submit">
                        Confirm
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default JobsForm
