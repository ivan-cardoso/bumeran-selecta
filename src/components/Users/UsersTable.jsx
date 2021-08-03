import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import UsersTableBody from './UsersTableBody'
// import UpdateCompaniesForm from './UpdateCompaniesForm'
import usersColumn from './UsersData'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

export default function CompaniesTable({ allUsers }) {
  const classes = useStyles()
  const [showTable, setShowTable] = useState(true)

  return (
    <>
      {showTable ? (
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size='small'
            aria-label='a dense table'
          >
            <TableHead>
              <TableRow>
                {usersColumn.map((column, index) => {
                  return (
                    <TableCell key={index} align='center'>
                      {column}
                    </TableCell>
                  )
                })}
              </TableRow>
            </TableHead>

            <UsersTableBody allUsers={allUsers} setShowTable={setShowTable} />
          </Table>
        </TableContainer>
      ) : null}
    </>
  )
}
