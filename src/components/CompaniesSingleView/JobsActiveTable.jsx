import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import JobsActiveTableBody from "./JobsActiveTableBody";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function JobsActiveTable({ activeJobs }) {
  const classes = useStyles();
  const jobsColums = [
    "Titulo",
    "Area",
    "Seniority",
    "Tipo de empleo",
    "Provincia",
  ];

  return (
    <>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              {jobsColums.map((jobs, index) => {
                return (
                  <TableCell key={index} align="right">
                    {jobs}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>

          <JobsActiveTableBody activeJobs={activeJobs} />
        </Table>
      </TableContainer>
    </>
  );
}
