import React, { useEffect, useState } from 'react'
import AddRecruiter from './AddRecruiter'
import { Paper, makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import DenseTable from './RecruiterTable'
import { getAllRecruiters, recruitersColums } from './recruiterTableData'
import InputSearch from './InputSearch'
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}))

const Recruiter = () => {
  const classes = useStyles()
  const [recruiters, setRecruiters] = useState([])

  useEffect(() => {
    getAllRecruiters().then((recruiters) => setRecruiters(recruiters))
  }, [])

    
  return (
    <>
      <AddRecruiter setRecruiters={setRecruiters} />
      <InputSearch setRecruiters={setRecruiters} recruiters={recruiters} />
      <Paper className={classes.pageContent}>
        {recruiters.length ? (
          <DenseTable
            recruiters={recruiters}
            setRecruiters={setRecruiters}
            recruitersColums={recruitersColums}
          />
        ) : (
          <h1>No hay resultados...</h1>
        )}
      </Paper>
    </>
  )
}

export default Recruiter
