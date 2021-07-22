import React from "react";
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



function SingleViewCompany() {
  const [activeJobs, setActiveJobs] = React.useState([]);
  const { open, setOpen, handleOpen, handleClose, classes, modalStyle } =
    useModal();
  const history = useHistory();
  const { singleCompany, jobsCompany } = useSelector((state) => state);
  const { name, email, state, img, contactName, description, area, id } =
    singleCompany;

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllJobsByCompany(id)).then((value) => {
      if (value.payload) {
        let arr = value.payload.filter((jobs) => jobs.isOpen);
        setActiveJobs(arr);
      }
    });
  }, [dispatch]);

  return (
    <div>
      {singleCompany.id ? (
        <div className={styles.container}>
          <div className={styles.picture}>
            <h1>{name}</h1>
            <img src={img} alt={name} />
            <div className={styles.bio}>
              <h2>
                <span>{description}</span>
              </h2>
            </div>
          </div>
          <div>
            <div className={styles.info}>
              <p>
                Email: <span>{email}</span>
              </p>
              <p>
                Nombre de contacto: <span>{contactName}</span>
              </p>
              <p>
                Provincia: <span>{state.name}</span>
              </p>
              <p>
                Area: <span>{area.name}</span>
              </p>
              <div className={styles.ButtonsInfo}>
                <AddJob></AddJob>
                <BtnHistoryJobs
                  onClick={() => setOpen(true)}
                  name="Historial de busquedas"
                ></BtnHistoryJobs>

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
              </div>
            </div>
            <div id={styles.tableActiveJobs}>
              <h1>Busquedas activas</h1>
              <JobsActiveTable activeJobs={activeJobs} />
            </div>
          </div>
        </div>
      ) : (
        history.push("/companies")
      )}
      <BtnGoBack onClick={history.goBack} name="Go Back"></BtnGoBack>
    </div>
  );
}

export default SingleViewCompany;
