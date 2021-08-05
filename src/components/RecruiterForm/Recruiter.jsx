import React, { useEffect, useState } from 'react'
import AddRecruiter from './AddRecruiter'
import { Paper, makeStyles } from '@material-ui/core'
import DenseTable from './RecruiterTable'
import { recruitersColums } from "./recruiterTableData";
import InputSearch from './InputSearch'
import { useDispatch } from 'react-redux'
import { getAllAditionalData } from '../../store/aditionalData/actions'
import { getAllRecruiters } from "../../store/recruiter/actions";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}))

const Recruiter = () => {
  const classes = useStyles()
  const [active, setActive] = useState({});
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
    dispatch(getAllRecruiters()).then((recruiter) =>
      setRecruiters(recruiter.payload)
    );
    dispatch(getAllAditionalData());
  }, [dispatch, active]);
  console.log(recruiters);
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
            setActive={setActive}
          />
        ) : (
          <h1>No hay resultados...</h1>
        )}
      </Paper>
    </>
  );
}

export default Recruiter
