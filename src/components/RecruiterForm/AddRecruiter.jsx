import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createRec } from '../../store/recruiter/actions'
import RecruiterForm from './RecruiterForm'
import { Grid, Paper, makeStyles, Button } from '@material-ui/core'
import { getAllRecruiters } from './recruiterTableData'
import s from './index.module.css'

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}))

const Recruiter = ({ setRecruiters }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const initialFormValues = {
    name: null,
    surname: null,
    email: null,
    country: null,
    state: null,
    bio: null,
    img: null,
    favoriteArea1: null,
    favoriteArea2: null,
    favoriteArea3: null,
    seniority1: null,
    seniority2: null,
    seniority3: null,
  }
  const [values, setValues] = useState(initialFormValues)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createRec(values)).then(() => {
      getAllRecruiters()
        .then((recruiters) => setRecruiters(recruiters))
        .then(() => {
          setValues(initialFormValues)
          toggleAdd()
        })
    })
  }

  const toggleAdd = () => {
    document.getElementById('RecruiterFormAdd').style.display =
      document.getElementById('RecruiterFormAdd').style.display === 'none'
        ? 'block'
        : 'none'
  }

  const toggleEdit = () => {
    document.getElementById('RecruiterFormEdit').style.display =
      document.getElementById('RecruiterFormEdit').style.display === 'none'
        ? 'block'
        : 'none'
  }

  return (
    <Paper className={classes.pageContent}>
      <Grid item xs={6}></Grid>

      <Button
        onClick={toggleAdd}
        variant='contained'
        color='primary'
        label='Add'
        className={s.addButton}
      >
        Add new recruiter
      </Button>

      <div style={{ display: 'none' }} id='RecruiterFormAdd'>
        <RecruiterForm
          handleSubmit={handleSubmit}
          values={values}
          setValues={setValues}
        />
      </div>
    </Paper>
  )
}

export default Recruiter
