import React, { useState } from 'react'
import {  useDispatch } from 'react-redux'
import {
  TableBody,
  TableRow,
  TableCell,
  Modal,
  Fade,
  Backdrop,
  Grid,
  Button,
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import VisibilityIcon from '@material-ui/icons/Visibility'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import { getAllJobs, deleteJob } from '../../store/jobs/jobs'
import { getSingleJob } from "../../store/jobs/getSingleJob";
import ModalRecomendation from '../Recomendations/Index'
import styles from "../RecruiterForm/index.module.css";

import useModal from './useModal'
import JobsForm from './JobsForm'
import UpdateJob from './UpdateJob'
import { useHistory } from 'react-router-dom'

const JobsTableBody = ({ jobs, setShowTable, setUpdateInfo }) => {
  const {
    open,
    setOpen,
    handleOpen,
    handleClose,
    classes,
    modalStyle,
    openUpdate,
    setOpenUpdate,
  } = useModal()

  const [openRecruiter, setOpenRecruiter] = useState(false)
  const dispatch = useDispatch()

  const history = useHistory()

  const handleDelete = (id) => {
    dispatch(deleteJob(id))
    dispatch(getAllJobs())
  }

  const [jobValues, setJobValues] = useState()
  const [selectedJob, setSelectedJob] = useState({
    area: '',
    seniority: '',
    id: '',
  })
  const handleUpdateJob = (job) => {
    setJobValues(job)
    setOpen(true)
  }
  const assignRecruiter = () => {
    setOpenRecruiter(true)
  }

  const handleSingleJob = (job) => {
    dispatch(getSingleJob(job));
    history.push(`/jobs/${job.id}`)
  }

  // React.useEffect(() => {
  //   dispatch(getAllJobs());
  // }, [ openRecruiter]);

  return (
    <TableBody>
      {jobs
        ? jobs.map((job) => {

          
            return (
              <TableRow>
                <TableCell align="center">{job.title}</TableCell>
                <TableCell align="center">{job.company.name}</TableCell>
                <TableCell align="center">{job.area.name}</TableCell>
                <TableCell align="center">{job.seniority.name}</TableCell>
                <TableCell align="center">{job.typeemloyed.name}</TableCell>

                <TableCell align="center">{job.modality.name}</TableCell>
                <TableCell align="center">{job.country}</TableCell>
                <TableCell align="center">{job.state.name}</TableCell>
                <TableCell align="center">{job.salary}</TableCell>
                <TableCell align="center">{job.isOpen}</TableCell>

                <TableCell align="center">
                  <button
                    className={job.isOpen !== "cerrada" && styles.editButton}
                    disabled={job.isOpen === "cerrada"}
                    onClick={() => {
                      handleUpdateJob(job);
                    }}
                  >
                    <EditIcon />
                  </button>
                </TableCell>
                <TableCell align="right">
                  <button
                    className={styles.singleViewButton}
                    onClick={() => handleSingleJob(job)}
                  >
                    <VisibilityIcon />
                  </button>
                </TableCell>
                <TableCell align="right">
                  <button
                    className={!job.recruiterId && styles.assignRecruiterButton}
                    disabled={job.recruiterId}
                    onClick={() => {
                      setSelectedJob({
                        area: job.area.name,
                        seniority: job.seniority.name,
                        id: job.id,
                      });

                      assignRecruiter();
                    }}
                  >
                    <PersonAddIcon />
                  </button>
                </TableCell>
              </TableRow>
            );
          })
        : null}

      <Modal
        open={open}
        onClose={() => {
          handleClose()
        }}
        className={classes.modal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <div style={modalStyle} className={classes.paper}>
            <UpdateJob job={jobValues} handleClose={handleClose} />
          </div>
        </Fade>
      </Modal>

      <ModalRecomendation
        selectedJob={selectedJob}
        open={openRecruiter}
        setOpenRecruiter={setOpenRecruiter}
        className={classes.modal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
        ClassNamePaper={classes.paper}
        modalStyle={modalStyle}
      />
    </TableBody>
  )
}

export default JobsTableBody
