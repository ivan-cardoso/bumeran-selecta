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
import styles from './index.module.css'

function RecruiterTableBody({
  recruiters,
  setRecruiters,
  setShowTable,
  setUpdateInfo,
}) {
  const handleDelete = (id) => {
    axios
      .delete(`/api/recruiters/${id}`)
      .then((res) => res.data)
      .then((recruiterDestroyed) => {
        const recruitersWithoutElimiated = recruiters.filter(
          (recruiter) => recruiter.id !== recruiterDestroyed.id
        )
        setRecruiters(recruitersWithoutElimiated)
      })
  }

  const history = useHistory()
  const dispatch = useDispatch()

  const handleSingleView = (recruiter) => {
    dispatch(singleRecruiter(recruiter))
    history.push(`/recruiters/${recruiter.id}`)
  }
  return (
    <TableBody>
      {recruiters.map((recruiter) => {
        const {
          country,
          email,
          favoriteArea1,
          id,
          name,
          rating,
          seniority1,
          state,
          surname,
        } = recruiter

        return (
          <TableRow key={id}>
            <TableCell align='right'>{name}</TableCell>
            <TableCell align='right'>{surname}</TableCell>
            <TableCell align='right'>{email}</TableCell>
            <TableCell align='right'>{country}</TableCell>
            <TableCell align='right'>{state}</TableCell>
            <TableCell align='right'>{rating}</TableCell>
            <TableCell align='right'>{favoriteArea1}</TableCell>
            <TableCell align='right'>{seniority1}</TableCell>
            <TableCell align='right'>
              {
                <button
                  className={styles.editButton}
                  onClick={() => {
                    setShowTable(false)
                    setUpdateInfo(recruiter)
                  }}
                >
                  <EditIcon />
                </button>
              }
            </TableCell>
            <TableCell align='right'>
              {
                <button className={styles.deleteButton} onClick={() => handleDelete(id)}>
                  <DeleteIcon />
                </button>
              }
            </TableCell>
            <TableCell align='right'>
              <button className={styles.singleViewButton} onClick={() => handleSingleView(recruiter)}>
                {<VisibilityIcon />}
              </button>
            </TableCell>
          </TableRow>
        )
      })}
    </TableBody>
  )
}

export default RecruiterTableBody
