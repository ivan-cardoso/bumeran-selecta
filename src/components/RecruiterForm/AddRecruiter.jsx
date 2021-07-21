import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createRec } from '../../store/recruiter/actions'
import RecruiterForm from './RecruiterForm'
import { Grid, Paper, makeStyles } from '@material-ui/core'
import { getAllRecruiters } from './recruiterTableData'
import s from './index.module.css'
import { Alert } from 'antd'
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
  const [showMessage, setShowMessage] = useState('')
  const [succes, setSucces] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

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
        if (recruiterCreated.payload.bio) setSucces(true);
        else {
          setError(true);
          setErrorMessage("el email ya existe");
          setValues(initialFormValues);
        }
      })
      .then(() => setValues(initialFormValues))

      .then(() =>
        setTimeout(() => {
          setSucces(false);
          setError(false);
        }, 2500)
      )
      .then(() => {
        getAllRecruiters()
          .then((recruiters) => setRecruiters(recruiters))
          .then((recruiters) => {
            toggleAdd();
            return recruiters;
          });
      })
      .catch((err) => {
        console.log(err);
        setValues(initialFormValues);
        setError(true);
      });
  }

  const toggleAdd = () => {
    document.getElementById('RecruiterFormAdd').style.display =
      document.getElementById('RecruiterFormAdd').style.display === 'none'
        ? 'block'
        : 'none'
  }

  return (
    <>
      <div>
        {succes && (
          <Alert
            className={showMessage}
            message='Usuario Agregado con exito'
            banner
            type='success'
            showIcon
          />
        )}
        {error && <Alert message={errorMessage} type='error' showIcon />}
      </div>
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
