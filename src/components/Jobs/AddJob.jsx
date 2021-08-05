import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { createJob, getAllJobs } from '../../store/jobs/jobs'
//import { getAllJobsByCompany } from '../../store/companies/jobsCompany'
import {
  Modal,
  Fade,
  Backdrop,
} from '@material-ui/core'
import JobsForm from './JobsForm'
import { message } from 'antd'
//import styles from './index.module.css'
import useModal from './useModal'
import BtnCreateNewJobs from '../UX/Buttons/BtnCreateNewJobs'
import { singleCompany } from '../../store/companies/singleCompany'

const AddJob = ({ setCreate }) => {
  const { open, setOpen, handleOpen, handleClose, classes, modalStyle } =
    useModal()

        const { user } = useSelector((state) => state);


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
          message.success("Búsqueda creada correctamente");
        }
      })
    } else {
      message.warning('Complete los campos')
    }
  }

  return (
    <>
      <div style={{ marginLeft: 300, marginTop: 20 }}>
        <BtnCreateNewJobs
          disabled={user.role.name === "auditor"}
          onClick={handleOpen}
          name="Crear búsqueda"
        ></BtnCreateNewJobs>
      </div>

      <Modal
        open={open}
        onClose={() => {
          handleClose();
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
              handleClose={handleClose}
            />
          </div>
        </Fade>
      </Modal>
    </>
  );
}

export default AddJob
