import React, { useState, useEffect } from "react";
import Recruiter from "./Recruiter";
import { useDispatch } from "react-redux";

import { Grid, TextField, makeStyles } from "@material-ui/core";

/* 
name  surname email country state bio img rating  favoriteArea1, 2 y 3 y seniority 
*/

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

const initialFormValues = {
  name: "",
  surname: "",
  country: "",
  state: "",
  bio: "",
  img: "",
  rating: "",
  favoriteArea1: "",
  favoriteArea2: "",
  favoriteArea3: "",
  seniority: "",
};

const AddRecruiter = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState(initialFormValues);
  const classes = useStyles();

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  return (
    <form className={classes.root}>
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
            label="Img"
            name="img"
            value={values.img}
            onChange={handleInputChange}
          />

          <TextField
            variant="outlined"
            label="Rating"
            name="rating"
            value={values.rating}
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
            label="Seniority"
            name="seniority"
            value={values.seniority}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={6}></Grid>
      </Grid>
    </form>
  );
};

export default AddRecruiter;
/* 
name  surname email country state bio img rating  favoriteArea1, 2 y 3 y seniority 
*/

/* <Container>

      <FormControl>
        <InputLabel htmlFor="email">Email address</InputLabel>
        <Input id="email" type="email" aria-describedby="email-helper" />
        <FormHelperText id="email-helper">We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="email">Editar </InputLabel>
        <Input id="email" type="email" aria-describedby="email-helper" />
        <FormHelperText id="email-helper">We'll never share your email.</FormHelperText>
      </FormControl>


    </Container> */
