import React from 'react'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

function RecruiterTableBody({ recruiters }) {
  const handleDelete = (id) => {
    console.log('hice click con id:', id)
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
                <a href='#'>
                  <EditIcon />
                </a>
              }
            </TableCell>
            <TableCell align='right'>
              {
                <button onClick={() => handleDelete(id)}>
                  <DeleteIcon />
                </button>
              }
            </TableCell>
          </TableRow>
        )
      })}
    </TableBody>
  )
}

export default RecruiterTableBody
