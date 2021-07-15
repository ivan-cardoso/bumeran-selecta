import React, { useEffect, useState } from 'react'
import AddRecruiter from './RecruiterForm'
import { Paper, makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import DenseTable from './RecruiterTable'
import axios from 'axios'
import { getAllRecruiters, recruitersColums } from './recruiterTableData'
import InputSearch from './InputSearch'

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}))

const Recruiter = () => {
  const history = useHistory()
  const classes = useStyles()
  const [recruiters, setRecruiters] = useState([])

  useEffect(() => {
    getAllRecruiters().then((recruiters) => setRecruiters(recruiters))
  }, [])

  return (
    <>
      <InputSearch setRecruiters={setRecruiters} />
      <Paper className={classes.pageContent}>
        {recruiters.length && (
          <DenseTable
            recruiters={recruiters}
            recruitersColums={recruitersColums}
          />
        )}
        {/* <AddRecruiter /> */}
        <button onClick={() => history.goBack()}>Go back</button>
      </Paper>
    </>
  )
}

export default Recruiter
