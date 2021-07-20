import React from "react";
import { Paper, makeStyles } from "@material-ui/core";
import JobsForm from "./JobsForm";


const Jobs = () => {

  const useStyles = makeStyles((theme) => ({
    pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3),
    },
  }))
  const classes = useStyles()

  return (
    <Paper className={classes.pageContent}>
      <JobsForm />
    </Paper>
  );
};

export default Jobs;
