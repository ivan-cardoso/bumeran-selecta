import React, { useEffect, useState } from 'react'
import AddRecruiter from './AddRecruiter'
import { Paper, makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import DenseTable from './RecruiterTable'
import { getAllRecruiters, recruitersColums } from './recruiterTableData'
import InputSearch from './InputSearch'
import { useSelector, useDispatch } from 'react-redux'
import { getAllAditionalData } from '../../store/aditionalData/actions'

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}))

const Recruiter = () => {
  const classes = useStyles()
  const [recruiters, setRecruiters] = useState([])
  const [values, setValues] = useState({
    search: '',
    area1: '',
    seniority1: '',
  })

  const [selectedArea, setSelectedArea] = useState('')
  const [selectedSeniority, setSelectedSeniority] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    getAllRecruiters().then((recruiters) => setRecruiters(recruiters))
    dispatch(getAllAditionalData())
  }, [])

  return (
    <>
      <AddRecruiter setRecruiters={setRecruiters} />
      <InputSearch
        values={values}
        setValues={setValues}
        setRecruiters={setRecruiters}
        recruiters={recruiters}
        selectedArea={selectedArea}
        setSelectedArea={setSelectedArea}
        selectedSeniority={selectedSeniority}
        setSelectedSeniority={setSelectedSeniority}
      />
      <Paper className={classes.pageContent}>
        {recruiters.length ? (
          <DenseTable
            recruiters={recruiters}
            setRecruiters={setRecruiters}
            setValues={setValues}
            recruitersColums={recruitersColums}
            setSelectedSeniority={setSelectedSeniority}
            setSelectedArea={setSelectedArea}
          />
        ) : (
          <h1>No hay resultados...</h1>
        )}
      </Paper>
    </>
  )
}

export default Recruiter
