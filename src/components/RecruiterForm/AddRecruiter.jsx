import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createRec } from '../../store/recruiter/actions'
import RecruiterForm from './RecruiterForm'
import { Grid, Paper, makeStyles } from '@material-ui/core'
import { getAllRecruiters } from './recruiterTableData'
import s from './index.module.css'
import { message } from 'antd'
import BtnNewRecuiter from '../UX/Buttons/BtnNewRecruiter'

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
    dispatch(createRec(values))
      .then((recruiterCreated) => {
        if (recruiterCreated.payload.bio) {
          message.success('usuario agregado con exito')
        } else {
          message.error('el usuario ya existe')
        }
        return
      })
      .then(() => {
        setValues((values) => initialFormValues)
      })
      .then(() => {
        getAllRecruiters()
          .then((recruiters) => setRecruiters(recruiters))
          .then((recruiters) => {
            toggleAdd()
            return recruiters
          })
      })
      .catch((err) => {
        console.log(err)
        setValues(initialFormValues)
      })
  }

  console.log(values)

  const toggleAdd = () => {
    setValues(initialFormValues)
    document.getElementById('RecruiterFormAdd').style.display =
      document.getElementById('RecruiterFormAdd').style.display === 'none'
        ? 'block'
        : 'none'
  }

  return (
    <>
      <Paper className={classes.pageContent}>
        <Grid item xs={6}></Grid>

        <BtnNewRecuiter
          onClick={toggleAdd}
          label='Add'
          name='Add new recruiter'
          className={s.addButton}
        ></BtnNewRecuiter>

        <div style={{ display: 'none' }} id='RecruiterFormAdd'>
          <RecruiterForm
            handleSubmit={handleSubmit}
            values={values}
            setValues={setValues}
          />
        </div>
      </Paper>
    </>
  )
}

export default Recruiter
