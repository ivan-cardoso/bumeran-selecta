import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { createRec } from '../../store/recruiter/actions'
import RecruiterForm from './RecruiterForm'
import {
  Grid,
  Paper,
  makeStyles,
  Modal,
  Fade,
  Backdrop,
} from "@material-ui/core";

import { getAllRecruiters } from './recruiterTableData'
import s from './index.module.css'
import { message } from 'antd'
import BtnNewRecuiter from '../UX/Buttons/BtnNewRecruiter'
import useModal from "../Jobs/useModal";


const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}))

const Recruiter = ({ setRecruiters }) => {
  const clases = useStyles();
  const dispatch = useDispatch()
  const { open, handleOpen, handleClose, classes, modalStyle } = useModal();

  const initialFormValues = {
    name: null,
    surname: null,
    email: null,
    country: null,
    stateId: null,
    bio: null,
    img: null,
    favoriteArea1: null,
    favoriteArea2: null,
    favoriteArea3: null,
    seniority1: null,
    seniority2: null,
    seniority3: null,
  };
  const [values, setValues] = useState(initialFormValues)
  const { user } = useSelector((state) => state);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createRec(values))
      .then((recruiterCreated) => {
        if (recruiterCreated.payload.bio) {
          message.success('usuario agregado con exito')
          handleClose();
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
            setValues(initialFormValues);
            return recruiters
          })
      })
      .catch((err) => {
        console.log(err)
        setValues(initialFormValues)
      })
  }

  return (
    <>
      <Paper className={clases.pageContent}>
        <Grid item xs={6}></Grid>

        <div className={s.divAddBtn}>
          <BtnNewRecuiter
            disabled={user.roleId === 4}
            onClick={() => handleOpen()}
            label="Add"
            name="Agregar Nuevo Reclutador"
          ></BtnNewRecuiter>
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
              <RecruiterForm
                handleSubmit={handleSubmit}
                values={values}
                setValues={setValues}
                handleClose={handleClose}
              />
            </div>
          </Fade>
        </Modal>
      </Paper>
    </>
  );
}

export default Recruiter
