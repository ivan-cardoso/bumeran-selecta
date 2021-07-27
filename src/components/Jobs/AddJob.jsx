import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createJob, getAllJobs } from '../../store/jobs/jobs'
import { getAllJobsByCompany } from '../../store/companies/jobsCompany'
import {
  Grid,
  Paper,
  Button,
  Modal,
  Fade,
  makeStyles,
  Backdrop,
} from '@material-ui/core'
import JobsForm from './JobsForm'
import { message } from 'antd'
import styles from './index.module.css'
import useModal from './useModal'
import BtnCreateNewJobs from '../UX/Buttons/BtnCreateNewJobs'
import { singleCompany } from '../../store/companies/singleCompany'

// function getModalStyle() {
//     const top = 50
//     const left = 50

//     return {
//       top: `${top}%`,
//       left: `${left}%`,
//       transform: `translate(-${top}%, -${left}%)`,
//     }
// }

const AddJob = ({ setCreate }) => {
  const { open, setOpen, handleOpen, handleClose, classes, modalStyle } =
    useModal()

  //Traditional settings
  const handleShowForm = () => {
    document.getElementById('createJobForm').style.display =
      document.getElementById('createJobForm').style.display === 'none'
        ? 'block'
        : 'none'
  }

  //Modal settings
  // const useStyles = makeStyles((theme) => ({
  //     modal: {
  //       display: 'flex',
  //       alignItems: 'center',
  //       justifyContent: 'center',
  //     },
  //     paper: {
  //       position: 'absolute',
  //       width: 1100,
  //       backgroundColor: theme.palette.background.paper,
  //       boxShadow: theme.shadows[5],
  //       padding: theme.spacing(2, 4, 3),
  //     },
  //   }))
  // const classes = useStyles()

  // const [modalStyle] = React.useState(getModalStyle)
  // const [open, setOpen] = React.useState(false)

  // const handleOpen = () => {
  //     setOpen(true)
  //   }
  // const handleClose = () => {
  //     setOpen(false)
  // }

  //FORM
  const initialValues = {
    title: null,
    areaId: null,
    seniorityId: null,
    country: null,
    stateId: null,
    typeemloyedId: null,
    salary: null,
    modalityId: null,
    description: null,
    companyId: null,
  }
  const [values, setValues] = useState(initialValues)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
    console.log(values)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      values.title !== null &&
      values.areaId !== null &&
      values.seniorityId !== null &&
      values.country !== null &&
      values.typeemloyedId !== null &&
      values.modalityId !== null &&
      values.description !== null &&
      values.stateId !== null
    ) {
      dispatch(createJob(values)).then((value) => {
        if (value.payload) {
          dispatch(getAllJobs())
          dispatch(singleCompany({}))
          if (setCreate) setCreate(true)
          setOpen(false)
          message.success('Búsqueda creada correctamente')
          // dispatch(getCompanies());
          // setValues(initialFormValues);
        }
      })
    } else {
      message.warning('Complete los campos')
    }
  }

  return (
    <>
      <div style={{ marginLeft: 300, marginTop: 20 }}>
        {/* <div> */}
        <BtnCreateNewJobs
          onClick={handleOpen}
          name='Crear búsqueda'
        ></BtnCreateNewJobs>
      </div>
      {/* <div style={{ display: "none" }} id="createJobForm">
                <JobsForm/>
            </div> */}

      <Modal
        open={open}
        onClose={() => {
          handleClose()
        }}
        className={classes.modal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 1000 }}
      >
        <Fade in={open}>
          <div style={modalStyle} className={classes.paper}>
            <JobsForm
              values={values}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </Fade>
      </Modal>
    </>
  )
}

export default AddJob
