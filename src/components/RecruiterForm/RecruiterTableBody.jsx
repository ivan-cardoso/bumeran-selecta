import React, { useState } from "react";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import VisibilityIcon from "@material-ui/icons/Visibility";
import axios from "axios";
import { Modal, Fade, Backdrop } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { singleRecruiter } from "../../store/recruiter/actions";
import { Popconfirm, message } from "antd";
import styles from "./index.module.css";
import useModal from "../Jobs/useModal";
import UpdateForm from "./UpdateForm";
import RatingView from "../RecruiterSingleView/RatingView";

function RecruiterTableBody({
  recruiters,
  setRecruiters,
  setShowTable,
  handleSubmit,
}) {
  const { open, setOpen, handleClose, classes, modalStyle } = useModal();
  const handleDelete = (id) => {
    axios
      .delete(`/api/recruiters/${id}`)
      .then((res) => res.data)
      .then((recruiterDestroyed) => {
        const recruitersWithoutElimiated = recruiters.filter(
          (recruiter) => recruiter.id !== recruiterDestroyed.id
        );
        setRecruiters(recruitersWithoutElimiated);
      })
      .then(() => message.success("usuario eliminado"));
  };

  // const [confirmDelete, setConfirmDelete] = useState(false); No se esta utilizando

  const { user } = useSelector((state) => state);

  const history = useHistory();
  const dispatch = useDispatch();

  const [updateValues, setUpdateValues] = useState("");

  const handleUpdateRecruiter = (recruiter) => {
    setUpdateValues(recruiter);
    setOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateValues({
      ...updateValues,
      [name]: value,
    });
  };
  const handleSingleView = (recruiter) => {
    dispatch(singleRecruiter(recruiter));
    history.push(`/recruiters/${recruiter.id}`);
  };
  return (
    <TableBody>
      {recruiters
        ? recruiters.map((recruiter) => {
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
            } = recruiter;
            return (
              <TableRow key={id}>
                <TableCell align="center">{name}</TableCell>
                <TableCell align="center">{surname}</TableCell>
                <TableCell align="center">{email}</TableCell>
                <TableCell align="center">{country}</TableCell>
                <TableCell align="center">
                  {state ? state.name : null}
                </TableCell>
                <TableCell align="center">
                  {<RatingView rating={rating} />}
                </TableCell>
                <TableCell align="center">{favoriteArea1}</TableCell>
                <TableCell align="center">{seniority1}</TableCell>
                <TableCell align="right">
                  {
                    <button
                      disabled={user.roleId === 4}
                      className={user.roleId === 4 ? null : styles.editButton}
                      onClick={() => {
                        handleUpdateRecruiter(recruiter);
                      }}
                    >
                      <EditIcon />
                    </button>
                  }
                </TableCell>
                <TableCell align="right">
                  <Popconfirm
                    title={`¿estas seguro que deseas eliminar el usuario ${email} ?`}
                    onConfirm={() => handleDelete(id)}
                    onCancel={() => message.error("cancelado")}
                    okText="confirmar"
                    cancelText="cancelar"
                  >
                    <button
                      disabled={user.roleId !== 3}
                      className={
                        user.roleId === 3 ? styles.deleteButton : null
                      }
                    >
                      <DeleteIcon />
                    </button>
                  </Popconfirm>
                </TableCell>
                <TableCell align="right">
                  <button
                    className={styles.singleViewButton}
                    onClick={() => handleSingleView(recruiter)}
                  >
                    {<VisibilityIcon />}
                  </button>
                </TableCell>
              </TableRow>
            );
          })
        : null}

      <Modal
        open={open}
        onClose={() => {
          handleClose();
        }}
        className={classes.modal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 1000 }}
      >
        <Fade in={open}>
          <div style={modalStyle} className={classes.paper}>
            <UpdateForm
              values={updateValues}
              setValues={setUpdateValues}
              handleInputChange={handleInputChange}
              setShowTable={setShowTable}
              handleClose={handleClose}
              handleSubmit={handleSubmit}
            />
          </div>
        </Fade>
      </Modal>
    </TableBody>
  );
}

export default RecruiterTableBody;
