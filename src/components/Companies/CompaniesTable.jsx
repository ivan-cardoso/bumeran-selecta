import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import CompaniesTableBody from './CompaniesTableBody'
import UpdateCompaniesForm from "./UpdateCompaniesForm";
import companiesColums from './CompaniesData'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

export default function CompaniesTable({ companies }) {
  const classes = useStyles();
  const [showTable, setShowTable] = useState(true);

  return (
    <>
      {showTable ? (
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                {companiesColums.map((column, index) => {
                  return (
                    <TableCell key={index} align="center">
                      {column}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>

            <CompaniesTableBody
              companies={companies}
              setShowTable={setShowTable}
            />
          </Table>
        </TableContainer>
      ) : null}
    </>
  );
}
