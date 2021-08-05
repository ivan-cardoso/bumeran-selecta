import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import RecruiterTableBody from './RecruiterTableBody'
import axios from 'axios'
import { getAllRecruiters } from './recruiterTableData'
import { message } from 'antd'

const useStyles = makeStyles({
  table: {
    minWidth: 600,
  },
})

export default function DenseTable({
  recruiters,
  setRecruiters,
  recruitersColums,
  setValues,
  setSelectedArea,
  setSelectedSeniority,
  setActive,
}) {
  const classes = useStyles()
  const [showTable, setShowTable] = useState(true)

  const handleSubmit = (e, updateValues) => {
    e.preventDefault()
    return axios
      .put(`/api/recruiters/${updateValues.id}`, updateValues)
      .then((res) => res.data)
      .then((data) => {
        if (data) message.success('usuario modificado con exito')
        setValues({
          search: '',
          area1: '',
          seniority1: '',
        })
        setSelectedSeniority('')
        setSelectedArea('')
        getAllRecruiters().then((recruiters) => setRecruiters(recruiters))
      })
      .catch(() => message.error('error, por favor intente mas tarde'))
  }

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
                {recruitersColums.map((column, index) => {
                  return (
                    <TableCell key={index} align='center'>
                      {column}
                    </TableCell>
                  )
                })}
              </TableRow>
            </TableHead>

            <RecruiterTableBody
              recruiters={recruiters}
              setRecruiters={setRecruiters}
              setShowTable={setShowTable}
              handleSubmit={handleSubmit}
              setActive={setActive}
            />
          </Table>
        </TableContainer>
      ) : null}
    </>
  )
}
