import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import RecruiterTableBody from './RecruiterTableBody'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

export default function DenseTable({ recruiters, recruitersColums }) {
  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size='small' aria-label='a dense table'>
        <TableHead>
          <TableRow>
            {recruitersColums.map((column, index) => {
              return (
                <TableCell key={index} align='right'>
                  {column}
                </TableCell>
              )
            })}
          </TableRow>
        </TableHead>
        <RecruiterTableBody recruiters={recruiters} />
      </Table>
    </TableContainer>
  )
}
