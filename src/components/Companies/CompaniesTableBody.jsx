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
import { getCompanies } from '../../store/companies/companies'
import useModal from '../Jobs/useModal'
import UpdateCompaniesForm from './UpdateCompaniesForm'

function CompaniesTableBody({ companies, setShowTable }) {
  const { open, setOpen, handleClose, classes, modalStyle } = useModal()

  const [updateInfo, setUpdateInfo] = useState('')

  const handleInputChangeUpdate = (e) => {
    const { name, value } = e.target
    setUpdateInfo({
      ...updateInfo,
      [name]: value,
    })
  }

  const { user } = useSelector((state) => state)

  const dispatch = useDispatch()

  const handleDelete = (id) => {
    axios.put(`/api/companies/active/${id}`).then((res) => {
      message.success('Compañia eliminada')
      dispatch(getCompanies())
    })
  }
  const handleUpdateCompany = (company) => {
    setUpdateInfo(company)
    setOpen(true)
  }

  const history = useHistory()

  const handleSingleView = (company) => {
    history.push(`/companies/${company.id}`)
  }

  return (
    <TableBody>
      {companies
        ? companies.map((company) => {
            const { name, state, email, area, id } = company

            return (
              <TableRow key={id}>
                <TableCell align='center'>
                  <div className={styles.recruiterImgContainer}>
                    {company.img ? (
                      <>
                        <img
                          src={company.img}
                          alt={company.img}
                          className={styles.companyImg}
                          onClick={() => handleSingleView(company)}
                        />
                      </>
                    ) : (
                      <img
                        src='https://static.thenounproject.com/png/3674270-200.png'
                        alt='Imagen no encontrada'
                        className={styles.companyImg}
                      />
                    )}
                  </div>
                </TableCell>
                <TableCell align='center'>{name}</TableCell>
                <TableCell align='center'>{email}</TableCell>
                <TableCell align='center'>
                  {state ? state.name : null}
                </TableCell>
                <TableCell align='center'>{area ? area.name : null}</TableCell>
                <TableCell align='center' style={{ padding: '4px' }}>
                  {
                    <button
                      disabled={user.role.name === 'auditor'}
                      className={
                        user.role.name === 'auditor' ? null : styles.editButton
                      }
                      onClick={() => {
                        handleUpdateCompany(company)
                      }}
                    >
                      <EditIcon />
                    </button>
                  }
                </TableCell>
                <TableCell align='center' style={{ padding: '4px' }}>
                  <Popconfirm
                    title={`¿estas seguro que deseas eliminar esta compañia?`}
                    onConfirm={() => handleDelete(id)}
                    okText='confirmar'
                    cancelText='cancelar'
                    disabled={user.role.name !== 'admin'}
                  >
                    <button
                      disabled={user.role.name !== 'admin'}
                      className={
                        user.role.name === 'admin' ? styles.deleteButton : null
                      }
                    >
                      <DeleteIcon />
                    </button>
                  </Popconfirm>
                </TableCell>
                <TableCell align='center' style={{ padding: '4px' }}>
                  <button
                    className={styles.singleViewButton}
                    onClick={() => handleSingleView(company)}
                  >
                    {<VisibilityIcon />}
                  </button>
                </TableCell>
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
            <UpdateCompaniesForm
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

export default CompaniesTableBody
