import React, { useState } from 'react'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import VisibilityIcon from '@material-ui/icons/Visibility'
import axios from 'axios'
import { Modal, Fade, Backdrop } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../RecruiterForm/index.module.css'
import { Popconfirm, message } from 'antd'
import { getAll } from '../../store/allUsers/allusers'
// import { singleCompany } from '../../store/companies/singleCompany'
import useModal from '../Jobs/useModal'
import UpdateUserForm from './UpdateUserForm'

function UsersTableBody({ allUsers, setShowTable }) {
  const { open, setOpen, handleOpen, handleClose, classes, modalStyle } =
    useModal()

  const user = useSelector((state) => state.user)

  const [updateInfo, setUpdateInfo] = useState('')

  const handleInputChangeUpdate = (e) => {
    const { name, value } = e.target
    setUpdateInfo({
      ...updateInfo,
      [name]: value,
    })
  }
  const history = useHistory()

  const dispatch = useDispatch()

  const handleDelete = (uid) => {
    axios.delete(`/api/user/delete/${uid}`).then(() => {
      message.success('usuario eliminado con exito!')
      dispatch(getAll())
    })
  }
  const handleUpdateUser = (user) => {
    setUpdateInfo(user)
    setOpen(true)
  }

  return (
    <TableBody>
      {allUsers
        ? allUsers.map((userMap) => {
            const { name, surname, email, role, id, uid } = userMap

            return (
              <TableRow key={id}>
                <TableCell align='center'>{name}</TableCell>
                <TableCell align='center'>{surname}</TableCell>
                <TableCell align='center'>{email}</TableCell>
                <TableCell align='center'>{role ? role.name : null}</TableCell>
                <TableCell align='center'>
                  {
                    <button
                      className={styles.editButton}
                      disabled={
                        user.role.name !== 'admin' || role.name === 'admin'
                      }
                      onClick={() => {
                        handleUpdateUser(userMap)
                      }}
                    >
                      <EditIcon />
                    </button>
                  }
                </TableCell>
                {role.name !== 'admin' && (
                  <TableCell align='center'>
                    <Popconfirm
                      disabled={user.role.name === 'auditor'}
                      title={`¿estas seguro que deseas eliminar este usuario?`}
                      onConfirm={() => handleDelete(uid)}
                      okText='confirmar'
                      cancelText='cancelar'
                    >
                      <button
                        className={styles.deleteButton}
                        disabled={user.role.name === 'auditor'}
                      >
                        <DeleteIcon />
                      </button>
                    </Popconfirm>
                  </TableCell>
                )}
              </TableRow>
            )
          })
        : null}

      <Modal
        open={open}
        onClose={() => {
          handleClose()
        }}
        className={classes.modal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 1000 }}
      >
        <Fade in={open}>
          <div style={modalStyle} className={classes.paper}>
            <UpdateUserForm
              values={updateInfo}
              setValues={setUpdateInfo}
              handleInputChange={handleInputChangeUpdate}
              setShowTable={setShowTable}
              handleClose={handleClose}
            />
          </div>
        </Fade>
      </Modal>
    </TableBody>
  )
}

export default UsersTableBody
