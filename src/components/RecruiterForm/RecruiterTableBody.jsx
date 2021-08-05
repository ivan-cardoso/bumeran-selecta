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
  setActive,
}) {
  const { open, setOpen, handleClose, classes, modalStyle } = useModal();
  // const updateActive = (id) => {
  //   axios
  //     .delete(`/api/recruiters/${id}`)
  //     .then((res) => res.data)
  //     .then((recruiterDestroyed) => {
  //       const recruitersWithoutElimiated = recruiters.filter(
  //         (recruiter) => recruiter.id !== recruiterDestroyed.id
  //       );
  //       setRecruiters(recruitersWithoutElimiated);
  //     })
  //     .then(() => message.success("usuario eliminado"));
  // };
  const updateActive = (id) => {
    axios
      .put(`/api/recruiters/active/${id}`)
      .then((res) => res.data)
      .then((recruiterDisabled) => {
        const recruitersWithoutElimiated = recruiters.filter(
          (recruiter) => recruiter.id !== recruiterDisabled.id
        );
        setActive(recruitersWithoutElimiated);
      })
      .then(() => message.success("usuario eliminado"));
  };

  // const [confirmDelete, setConfirmDelete] = useState(false); No se esta utilizando

  const { role } = useSelector((state) => state.user);

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
                <TableCell align="center">
                  <div
                    className={styles.recruiterImgContainer}
                    onClick={() => handleSingleView(recruiter)}
                  >
                    {recruiter.img ? (
                      <>
                        <img
                          src={recruiter.img}
                          alt={name}
                          className={styles.recruiterImg}
                        />
                      </>
                    ) : (
                      <img
                        src="https://static.thenounproject.com/png/3674270-200.png"
                        className={styles.recruiterImg}
                      />
                    )}
                  </div>
                </TableCell>
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
                <TableCell align="right" style={{ padding: "4px" }}>
                  {
                    <button
                      disabled={role.name === "auditor"}
                      className={
                        role.name === "auditor" ? null : styles.editButton
                      }
                      onClick={() => {
                        handleUpdateRecruiter(recruiter);
                      }}
                    >
                      <EditIcon />
                    </button>
                  }
                </TableCell>
                <TableCell align="right" style={{ padding: "4px" }}>
                  <Popconfirm
                    title={`¿estas seguro que deseas eliminar el usuario ${email} ?`}
                    onConfirm={() => updateActive(id)}
                    onCancel={() => message.error("cancelado")}
                    okText="confirmar"
                    cancelText="cancelar"
                    disabled={role.name !== "admin"}
                  >
                    <button
                      disabled={role.name !== "admin"}
                      className={
                        role.name === "admin" ? styles.deleteButton : null
                      }
                    >
                      <DeleteIcon />
                    </button>
                  </Popconfirm>
                </TableCell>
                <TableCell align="right" style={{ padding: "4px" }}>
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
