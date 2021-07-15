import React, { useState, useEffect } from "react";
import Recruiter from "./Recruiter";
import { useDispatch } from "react-redux";
import { createRec } from "../../store/recruiter/actions";
import {
  Grid,
  TextField,
  makeStyles,
  Button,
  IconButton,
} from "@material-ui/core";
import Box from '@material-ui/core/Box';

/* 
name  surname email country state bio img rating  favoriteArea1, 2 y 3 y seniority 
*/

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
    input: {
      display: "none",
    },
    "& > *": {
      margin: theme.spacing(1),
    },
    button: {
      margin: theme.spacing(1),
    },
  },
}));

const initialFormValues = {
  name: "",
  surname: "",
  email: "",
  country: "",
  state: "",
  bio: "",
  img: "",
  favoriteArea1: "",
  favoriteArea2: "",
  favoriteArea3: "",
  seniority1: "",
  seniority2: "",
  seniority3: "",
};

const AddRecruiter = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState(initialFormValues);
  const classes = useStyles();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createRec(values));
  };

  return (
    <form
      className={classes.root}
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <Grid container>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            label="Name"
            name="name"
            value={values.name}
            onChange={handleInputChange}
          />

          <TextField
            variant="outlined"
            label="Surname"
            name="surname"
            value={values.surname}
            onChange={handleInputChange}
          />

          <TextField
            variant="outlined"
            label="Email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />

          <TextField
            variant="outlined"
            label="Country"
            name="country"
            value={values.country}
            onChange={handleInputChange}
          />

          <TextField
            variant="outlined"
            label="State"
            name="state"
            value={values.state}
            onChange={handleInputChange}
          />

          <TextField
            variant="outlined"
            label="Bio"
            name="bio"
            value={values.bio}
            onChange={handleInputChange}
          />

          <TextField
            variant="outlined"
            label="favoriteArea1"
            name="favoriteArea1"
            value={values.favoriteArea1}
            onChange={handleInputChange}
          />

          <TextField
            variant="outlined"
            label="favoriteArea2"
            name="favoriteArea2"
            value={values.favoriteArea2}
            onChange={handleInputChange}
          />

          <TextField
            variant="outlined"
            label="favoriteArea3"
            name="favoriteArea3"
            value={values.favoriteArea3}
            onChange={handleInputChange}
          />

          <TextField
            variant="outlined"
            label="Seniority1"
            name="seniority1"
            value={values.seniority1}
            onChange={handleInputChange}
          />

          <TextField
            variant="outlined"
            label="Seniority2"
            name="seniority2"
            value={values.seniority2}
            onChange={handleInputChange}
          />

          <TextField
            variant="outlined"
            label="Seniority3"
            name="seniority3"
            value={values.seniority3}
            onChange={handleInputChange}
          />
  
          <Box component="span" display="block" p={1} m={1} bgcolor="background.paper">
          you can upload an image too :)
      </Box>
      
         {/*  <TextField
            variant="outlined"
            label="Img"
            name="img"
            value={values.img}
            onChange={handleInputChange}
          /> */}

          <input
            style={{ display: "none" }}
            id="contained-button-file"
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span" value={values.img}
            onChange={handleInputChange}>
              Upload Image
            </Button>
          </label>

          <div className={classes.root}></div>
        </Grid>
        <Grid item xs={6}></Grid>

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          label="Add"
          style={{
            border: "1px solid white",
            borderRadius: "10px",
            width: "10%",
            margin: "10px auto",
          }}
        >
          Add
        </Button>
      </Grid>
    </form>
  );
};

export default AddRecruiter;
