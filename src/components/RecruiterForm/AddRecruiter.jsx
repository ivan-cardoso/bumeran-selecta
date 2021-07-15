import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createRec } from "../../store/recruiter/actions";
import RecruiterForm from "./RecruiterForm";
import { Grid,Paper, makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme => ({
    pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3)
    },
  })));


const Recruiter = () => {

  const classes = useStyles()
  const dispatch = useDispatch();
  const initialFormValues = {
  name: "",
  surname: "",
  email:"",
  country: "",
  state: "",
  bio: "",
  img: "",
  favoriteArea1: "",
  favoriteArea2: "",
  favoriteArea3: "",
  seniority1: "",
  seniority2: "",
  seniority3: ""
};

  const [values, setValues] = useState(initialFormValues);

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
  
  const toggleAdd = () => {
    document.getElementById('RecruiterFormAdd').style.display = document.getElementById('RecruiterFormAdd').style.display === 'none' ? 'block' : 'none'
  }

  const toggleEdit = () => {
    document.getElementById('RecruiterFormEdit').style.display = document.getElementById('RecruiterFormEdit').style.display === 'none' ? 'block' : 'none'
  }

  return (

    <Paper className={classes.pageContent}>
      <Grid item xs={6}></Grid>

      <Button
        onClick={toggleAdd}        
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
      <Button
        onClick={toggleEdit}        
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
          Edit
      </Button>
      <div style={{display: 'none'}} id='RecruiterFormAdd'>
        <RecruiterForm handleInputChange={handleInputChange} handleSubmit={handleSubmit} values={values}/>
      </div>
      <div style={{display: 'none'}} id='RecruiterFormEdit'>
        <RecruiterForm handleInputChange={handleInputChange} handleSubmit={handleSubmit} values={values}/>
      </div>
    </Paper>
  );
};

export default Recruiter;
