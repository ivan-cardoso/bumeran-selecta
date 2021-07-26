import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styles from "../RecruiterSingleView/index.module.css";
import BtnGoBack from "../UX/Buttons/BtnGoBack";
import BtnHistoryJobs from "../UX/Buttons/BtnHistoryJobs";
import AddJob from "../Jobs/AddJob";
import { getAllJobsByCompany } from "../../store/companies/jobsCompany";
import JobsActiveTable from "./JobsActiveTable";
import useModal from "../Jobs/useModal";
import { Modal, Fade, Backdrop } from "@material-ui/core";
import style from "./index.module.css"


function SingleViewCompany() {
  const [activeJobs, setActiveJobs] = React.useState([]);
  const { open, setOpen, handleOpen, handleClose, classes, modalStyle } =
    useModal();
  const history = useHistory();
  const { singleCompany, jobsCompany } = useSelector((state) => state);
  const { name, email, state, img, contactName, description, area, id } =
    singleCompany;

  const dispatch = useDispatch();

  const [create, setCreate] = useState(false)

  React.useEffect(() => {
    dispatch(getAllJobsByCompany(id)).then((value) => {
      if (value.payload) {
        let arr = value.payload.filter((jobs) => jobs.isOpen);
        setActiveJobs(arr);
      }
    });
  }, [dispatch, create]);

  return (
    <div>
      {singleCompany.id ? (
        <div className={style.companySingleSection}>
          {console.log(singleCompany)}

          <div className={style.companySingleDetail}>
            <div className={style.singleCompanyImg}>
              <img className={style.singleImg} src={img} alt={name} />
            </div>

            <div className={style.singleCompanyDetails}>
              <div className={style.singleCompanyTitleContainer}>
                <h3 className={style.singleCompanyTitle}>{name}</h3>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 10.9995C11.173 10.9995 10.5 10.3265 10.5 9.4995C10.5 8.6725 11.173 7.9995 12 7.9995C12.827 7.9995 13.5 8.6725 13.5 9.4995C13.5 10.3265 12.827 10.9995 12 10.9995ZM12 5.9995C10.07 5.9995 8.5 7.5695 8.5 9.4995C8.5 11.4295 10.07 12.9995 12 12.9995C13.93 12.9995 15.5 11.4295 15.5 9.4995C15.5 7.5695 13.93 5.9995 12 5.9995ZM12 19.646C10.325 18.062 6 13.615 6 9.922C6 6.657 8.691 4 12 4C15.309 4 18 6.657 18 9.922C18 13.615 13.675 18.062 12 19.646ZM12 2C7.589 2 4 5.553 4 9.922C4 15.397 11.049 21.501 11.349 21.758C11.537 21.919 11.768 22 12 22C12.232 22 12.463 21.919 12.651 21.758C12.951 21.501 20 15.397 20 9.922C20 5.553 16.411 2 12 2Z"
                    fill="#222B45"
                  />
                </svg>
                <p>Argentina, {state.name}</p>
              </div>
              <h3>{area.name}</h3>
              <h3>Email: {email}</h3>
              <h3>Contacto: {contactName}</h3>
            </div>

            <div className={style.singleCompanyActions}>
              <AddJob setCreate={setCreate}></AddJob>
              <BtnHistoryJobs
                onClick={() => setOpen(true)}
                name="Historial de busquedas"
              ></BtnHistoryJobs>
            </div>
          </div>

          <Modal
            open={open}
            onClose={() => {
              handleClose();
            }}
            className={classes.modal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{ timeout: 500 }}
          >
            <Fade in={open}>
              <div style={modalStyle} className={classes.paper}>
                <JobsActiveTable activeJobs={jobsCompany} />
              </div>
            </Fade>
          </Modal>

          <div className={style.singleCompanyDescription}>
            <div className={style.singleCompanyContent}>
              <h2>Descripción de Companía</h2>
              <span className={style.singleCompanyDescriptionText}>
                {description}
              </span>
            </div>
          </div>

          <div className={style.singleCompanyDescription}>
            <div className={style.singleCompanyContent}>
              <h2>Búsquedas activas</h2>
              <JobsActiveTable activeJobs={activeJobs} />
            </div>
          </div>
        </div>
      ) : (
        history.push("/jobs")
      )}
      <BtnGoBack
        style={{ marginLeft: "40%" }}
        onClick={history.goBack}
        name="Go Back"
      ></BtnGoBack>
    </div>
  );
}

export default SingleViewCompany;
