import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import { TableBody, TableRow, TableCell, Modal, Fade, Backdrop} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import VisibilityIcon from '@material-ui/icons/Visibility'
import {getAllJobs, deleteJob} from "../../store/jobs/jobs"

import useModal from "./useModal"
import JobsForm from "./JobsForm"
import UpdateJob from "./UpdateJob"

const JobsTableBody = ({ jobs, setShowTable, setUpdateInfo }) => {
  const { open, setOpen, handleOpen, handleClose, classes, modalStyle } =
    useModal();
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteJob(id));
    dispatch(getAllJobs());
  };

  const [jobValues, setJobValues] = useState();
  const handleUpdateJob = (job) => {
    setJobValues(job);
    setOpen(true);
  };
  React.useEffect(() => {
    dispatch(getAllJobs());
  }, [dispatch]);

  return (
    <TableBody>
      {jobs ? (
        jobs.map((job) => {
          return (
            <TableRow>
              <TableCell align="right">{job.title}</TableCell>
              <TableCell align="right">{job.company.name}</TableCell>
              <TableCell align="right">{job.area.name}</TableCell>
              <TableCell align="right">{job.seniority.name}</TableCell>
              <TableCell align="right">{job.typeemloyed.name}</TableCell>

              <TableCell align="right">{job.modality.name}</TableCell>
              <TableCell align="right">{job.country}</TableCell>
              <TableCell align="right">{job.state.name}</TableCell>
              <TableCell align="right">{job.salary}</TableCell>
              <TableCell align="right">{job.description}</TableCell>

              <TableCell align="right">
                <button
                  onClick={() => {
                    // setShowTable(false)
                    // setUpdateInfo(job)
                    // handleUpdateJob(job)
                    handleUpdateJob(job);
                  }}
                >
                  <EditIcon />
                </button>
              </TableCell>

              <TableCell align="right">
                <button onClick={() => handleDelete(job.id)}>
                  <DeleteIcon />
                </button>
              </TableCell>

              <TableCell align="right">
                <button /* onClick={() => handleSingleView(recruiter)} */>
                  {<VisibilityIcon />}
                </button>
              </TableCell>
            </TableRow>
          );
        })
      ) : (
        null
      )}

      <Modal
        open={open}
        onClose={() => {
          handleClose();
        }}
        className={classes.modal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <div style={modalStyle} className={classes.paper}>
            <UpdateJob job={jobValues} />

            {/* <JobsForm values={job}
                    //  handleChange={handleChange} handleSubmit={handleSubmit}
                        /> */}
          </div>
        </Fade>
      </Modal>
    </TableBody>
  );
};

export default JobsTableBody
