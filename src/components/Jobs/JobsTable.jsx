import React from 'react'
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import jobsColums from './JobsData'
import JobsTableBody from './JobsTableBody'

const JobsTable = ({ jobs }) => {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  })
  const classes = useStyles()

  return (
    <>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size='small'
          aria-label='a dense table'
        >
          <TableHead>
            <TableRow>
              {jobsColums.map((column, index) => {
                return (
                  <TableCell key={index} align='center'>
                    {column}
                  </TableCell>
                )
              })}

              {/* <TableCell align='center'>Editar</TableCell>
              <TableCell align='center'>Ver mas</TableCell>
              <TableCell align='center'>Asignar</TableCell> */}
            </TableRow>
          </TableHead>

          <JobsTableBody jobs={jobs} />
        </Table>
      </TableContainer>
    </>
  )
}

export default JobsTable
