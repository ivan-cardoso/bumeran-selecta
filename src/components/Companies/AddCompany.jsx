import React from 'react'
import { Grid, Paper, Button, Modal, Fade, Backdrop } from "@material-ui/core";
import useStyles from './style'
import { useDispatch } from 'react-redux'
import AddCompaniesForm from './AddCompaniesForm'
import styles from '../RecruiterForm/index.module.css'
import { useState } from 'react'
import { createCompany, getCompanies } from '../../store/companies/companies'
import { message } from 'antd'
import useModal from "../Jobs/useModal";


export default function AddCompany({ values, setValues, handleInputChange }) {
  const clases = useStyles();
  const dispatch = useDispatch()
  const { open, setOpen, handleOpen, handleClose, classes, modalStyle } =
    useModal();

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      values.stateid !== null &&
      values.contactName !== null &&
      values.description !== null &&
      values.email !== null &&
      values.img !== null &&
      values.areaId !== null &&
      values.name !== null
    ) {
      dispatch(createCompany(values)).then((value) => {
        if (value.payload) {
          message.success('Company added')
          dispatch(getCompanies());
        } else {
          message.warning('Email ya existente')
        }
      })
    } else {
      message.warning('Complete los campos')
    }
  }

  return (
    <Paper className={clases.pageContent}>
      <Grid item xs={6}></Grid>
      <div style={{ marginLeft: 300 }}>
        <Button
          onClick={handleOpen}
          variant="contained"
          color="primary"
          label="Add"
          className={styles.addButton}
        >
          Agregar Empresa
        </Button>
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
            <AddCompaniesForm
              handleSubmit={handleSubmit}
              values={values}
              handleInputChange={handleInputChange}
              setValues={setValues}
            />
          </div>
        </Fade>
      </Modal>
    </Paper>
  );
}
