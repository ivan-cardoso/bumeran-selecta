import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import CompaniesTableBody from './CompaniesTableBody'
// import UpdateForm from './UpdateForm'
import companiesColums from './CompaniesData'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

export default function CompaniesTable({
  companies,
}) {
  const classes = useStyles()
  const [showTable, setShowTable] = useState(true)
  const [updateInfo, setUpdateInfo] = useState('')

//   const initialFormValues = {
//     name: null,
//     surname: null,
//     email: null,
//     country: null,
//     state: null,
//     bio: null,
//     img: null,
//     favoriteArea1: null,
//     favoriteArea2: null,
//     favoriteArea3: null,
//     seniority1: null,
//     seniority2: null,
//     seniority3: null,
//   }
//   const [updateValues, setUpdateValues] = useState(initialFormValues)

//   const handleSubmit = (e, updateValues) => {
//     e.preventDefault()
//     return axios
//       .put(`/api/recruiters/${updateInfo.id}`, updateValues)
//       .then((res) => res.data)
//       .then((data) => {
//         setShowTable(true)
//         setUpdateValues(initialFormValues)
//         setRecruiters((oldRecruiters) =>
//           oldRecruiters.map((singleRecruiter) => {
//             if (singleRecruiter.id === data[0].id) return data[0]
//             else return singleRecruiter
//           })
//         )
//       })
//   }

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
                {companiesColums.map((column, index) => {
                  return (
                    <TableCell key={index} align='right'>
                      {column}
                    </TableCell>
                  )
                })}
              </TableRow>
            </TableHead>

            <CompaniesTableBody
              companies={companies}
              setShowTable={setShowTable}
              setUpdateInfo={setUpdateInfo}
            />
          </Table>
        </TableContainer>
      ) : (
        // <UpdateForm
        //   values={updateInfo}
        //   setShowTable={setShowTable}
        // //   setValues={setUpdateValues}
        // //   handleSubmit={handleSubmit}
        // />
                 null
      )}
    </>
  )
}
