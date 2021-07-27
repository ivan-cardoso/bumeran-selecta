import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import RecruiterTableBody from './RecruiterTableBody'
import UpdateForm from './UpdateForm'
import axios from 'axios'
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
}) {
  const classes = useStyles()
  const [showTable, setShowTable] = useState(true)
  const [updateInfo, setUpdateInfo] = useState('')

  const initialFormValues = {
    name: null,
    surname: null,
    email: null,
    country: null,
    state: null,
    bio: null,
    img: null,
    favoriteArea1: null,
    favoriteArea2: null,
    favoriteArea3: null,
    seniority1: null,
    seniority2: null,
    seniority3: null,
  }
  const [updateValues, setUpdateValues] = useState(initialFormValues)

  const handleSubmit = (e, updateValues) => {
    e.preventDefault()
    return axios
      .put(`/api/recruiters/${updateInfo.id}`, updateValues)
      .then((res) => res.data)
      .then((data) => {
        if (data) message.success('usuario modificado con exito')

        setShowTable(true)
        setUpdateValues(initialFormValues)
        setRecruiters((oldRecruiters) =>
          oldRecruiters.map((singleRecruiter) => {
            if (singleRecruiter.id === data[0].id) return data[0]
            else return singleRecruiter
          })
        )
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
              setUpdateInfo={setUpdateInfo}
            />
          </Table>
        </TableContainer>
      ) : (
        <UpdateForm
          values={updateInfo}
          setShowTable={setShowTable}
          setValues={setUpdateValues}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  )
}
