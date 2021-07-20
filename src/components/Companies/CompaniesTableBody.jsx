import React from 'react'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import VisibilityIcon from '@material-ui/icons/Visibility'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { singleRecruiter } from '../../store/recruiter/actions'

function CompaniesTableBody({
  companies,
  setShowTable,
  setUpdateInfo,
}) {
//   const handleDelete = (id) => {
//     axios
//       .delete(`/api/recruiters/${id}`)
//       .then((res) => res.data)
//       .then((recruiterDestroyed) => {
//         const recruitersWithoutElimiated = recruiters.filter(
//           (recruiter) => recruiter.id !== recruiterDestroyed.id
//         )
//         setRecruiters(recruitersWithoutElimiated)
//       })
//   }

  const history = useHistory()
  const dispatch = useDispatch()

//   const handleSingleView = (recruiter) => {
//     dispatch(singleRecruiter(recruiter))
//     history.push(`/recruiters/${recruiter.id}`)
 // }
  return (
      <TableBody>
      {companies ? companies.map((company) => {
        const {
          name,
          address,
          email,
          id,
        } = company

        return (
          <TableRow key={id}>
            <TableCell align='right'>{name}</TableCell>
            <TableCell align='right'>{email}</TableCell>
            <TableCell align='right'>{address}</TableCell>
            <TableCell align='right'>
              {
                <button
                  onClick={() => {
                    setShowTable(false)
                    setUpdateInfo(company)
                  }}
                >
                  <EditIcon />
                </button>
              }
            </TableCell>
            <TableCell align='right'>
              {
                <button /* onClick={() => handleDelete(id)} */>
                  <DeleteIcon />
                </button>
              }
            </TableCell>
            <TableCell align='right'>
              <button /* onClick={() => handleSingleView(recruiter)} */>
                {<VisibilityIcon />}
              </button>
            </TableCell>
          </TableRow>
        )
      }):(null)}
    </TableBody>
  )
}

export default CompaniesTableBody
