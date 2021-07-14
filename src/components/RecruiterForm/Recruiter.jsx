import React from "react";
import AddRecruiter from "./RecruiterForm";
import { Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme => ({
    pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3)
    },
  })));


const Recruiter = () => {

    const classes = useStyles()



  return (

    <Paper className={classes.pageContent}>
      <AddRecruiter />
    </Paper>
  );
};

export default Recruiter;
