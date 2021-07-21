import React, {useEffect} from "react";
import { Paper, makeStyles } from "@material-ui/core";
import AddJob from "./AddJob";
import JobsTable from "./JobsTable"
import { useDispatch, useSelector } from "react-redux"
import {getAllJobs} from "../../store/jobs/jobs"

const Jobs = () => {

  const useStyles = makeStyles((theme) => ({
    pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3),
    },
  }))
  const classes = useStyles()

  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(getAllJobs())
  }, [])

  return (
    <>
      <AddJob/>
      <Paper className={classes.pageContent}>
        <JobsTable />
      </Paper>
    </>
  );
};

export default Jobs;
