import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserLogout } from "../../store/user/user";
import s from "./index.module.css";
/* Imports Material-UI */
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import BtnLogin from "../UX/Buttons/BtnLogin";
import BtnLogout from "../UX/Buttons/BtnLogout";
import ImageUpload from "../RecruiterForm/ImageUpload";
import { message } from "antd";
import axios from "axios";


/* Functions Material-UI */
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    position: "absolute",
    width: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

/* End Functions */

const NavBar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  /* Material-UI state and functions */
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [values, setValues] = React.useState({})
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  /* End state and functions */

  const handleLogout = () => {
    dispatch(UserLogout(user));
  };

  React.useEffect(() => {
    setValues(user)
  },[user])

  const handleEdit = () => {
    if (edit) {
      setEdit(false);
    }
    else {
      setEdit(true);
    }
  };
  const sumbitEdit = () => {
    if (
      values.name !== "" &&
      values.surname !== "" &&
      values.img !== "" &&
      values.email !== ""
    ) {
      axios.put(`/api/user/update/${values.uid}`, values).then(res => res.data).then(userUpdated => {
        //setValues({...userUpdated[0]})
        setEdit(false)
      message.success("Usuario editado con exito");
      })
    } else {
      message.warning("Complete los campos");
    }
  }
  return (
    <div className={s.navbarContainer}>
      <Link to={"/"}>
        <img
          src="https://www.bumeran.com.ar/selecta/wp-content/uploads/2021/06/logo-2.png"
          alt="bumeran-selecta-logo"
        />
      </Link>

      {user ? (
        <div className={s.navbarButtonsContainer}>
          <button
            className={s.buttonPerfil}
            type="button"
            onClick={() => handleOpen()}
          >
            <Avatar />
          </button>
          <BtnLogout name="Logout" onClick={handleLogout}></BtnLogout>
        </div>
      ) : (
        <div>
          <Link to={"/login"}>
            <BtnLogin name="Login"></BtnLogin>
          </Link>
        </div>
      )}
      {/* Material-UI animation */}
      <Modal
        open={open}
        onClose={() => {
          handleClose();
        }}
        className={classes.modal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div style={modalStyle} className={classes.paper}>
            <div className={s.profileUser}>
              <h1>Sobre mi...</h1>
              {edit ? (
                <ImageUpload values={values} setValues={setValues} />
              ) : (
                values && (
                  <img
                    style={{ maxWidth: "200px" }}
                    src={values.img}
                    alt={values.name}
                  />
                )
              )}
              <h3>
                <h3 className={s.stylePersonalInfo}>Nombre y Apellido</h3>
                {edit ? (
                  <input
                    className={s.inputs}
                    onChange={handleInputChange}
                    name="name"
                    type="text"
                    value={values.name}
                  />
                ) : (
                  <span>{values && values.name} </span>
                )}
                {edit ? (
                  <input
                    className={s.inputs}
                    onChange={handleInputChange}
                    name="surname"
                    type="text"
                    value={values.surname}
                  />
                ) : (
                  <span> {values && values.surname}</span>
                )}
              </h3>

              <h3>
                <h3 className={s.stylePersonalInfo}> Email </h3>
                {edit ? (
                  <input
                    className={s.inputs}
                    onChange={handleInputChange}
                    name="email"
                    type="email"
                    value={values.email}
                  />
                ) : (
                  <span>{values && values.email}</span>
                )}
              </h3>
              <h3>
                <h3 className={s.stylePersonalInfo}>Rol</h3>
                <span>{user && user.role.name} </span>
              </h3>
              <div className={s.buttons}>
                {edit ? (
                  <button className={s.buttonEdit} onClick={sumbitEdit}>
                    Confirmar
                  </button>
                ) : (
                  <Link to="/forgotpassword">
                    <button
                      className={s.buttonChangePassword}
                      onClick={() => handleClose()}
                    >
                      Cambiar Contrasena{" "}
                    </button>
                  </Link>
                )}
                {edit ? (
                  <button
                    className={s.buttonChangePassword}
                    onClick={handleEdit}
                    style={{ width: "30%" }}
                  >
                    Cancelar
                  </button>
                ) : (
                  <button className={s.buttonEdit} onClick={handleEdit}>
                    Editar
                  </button>
                )}
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
      {/* End Material-UI animation */}

      {/* {user && (
        <div>
          <Avatar alt={user.email} src={user.photoURL} />
          <button onClick={handleLogout}> Logout</button>
        </div>
      )} */}
    </div>
  );
};

export default NavBar;
