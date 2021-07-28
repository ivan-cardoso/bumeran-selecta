import React from "react";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSingleJob } from "../../store/jobs/getSingleJob";
import styles from "../RecruiterForm/index.module.css";

function JobsActiveTableBody({ activeJobs }) {
  const dispatch = useDispatch();

  const history = useHistory();
  const handleSingleJob = (job) => {
    dispatch(getSingleJob(job));
    history.push(`/jobs/${job.id}`);
  };
  return (
    <TableBody>
      {activeJobs.map((job) => {
        const { title, area, state, id, seniority, typeemloyed, isOpen } = job;
        return (
          <TableRow key={id}>
            <TableCell align="right">{title}</TableCell>
            <TableCell align="right">{area.name}</TableCell>
            <TableCell align="right">{seniority.name}</TableCell>
            <TableCell align="right">{typeemloyed.name}</TableCell>
            <TableCell align="right">{state.name}</TableCell>
            <TableCell align="right">{isOpen}</TableCell>
            <TableCell align="right">
              <button
                className={styles.singleViewButton}
                onClick={() => handleSingleJob(job)}
              >
                <VisibilityIcon />
              </button>
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
}

export default JobsActiveTableBody;
