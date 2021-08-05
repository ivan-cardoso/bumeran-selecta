import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Modal, Fade, Backdrop, CircularProgress } from "@material-ui/core";
import BtnHistoryJobs from '../UX/Buttons/BtnHistoryJobs'
import { useHistory, useParams } from 'react-router-dom'
import styles from './index.module.css'
import BtnGoBack from '../UX/Buttons/BtnGoBack'
import SimpleRating from './RatingView'
import RecruiterActiveTable from '../CompaniesSingleView/JobsActiveTable'
import axios from 'axios'
import useModal from '../Jobs/useModal'
import style from '../Companies/index.module.css'
import { getSingleRecruiter } from "../../store/recruiter/singleRecruiter";

function SingleView() {
  const { open, setOpen, handleClose, classes, modalStyle } = useModal()

  const history = useHistory()
  const dispatch = useDispatch();
  const params = useParams()
  const { singleRecruiter } = useSelector((state) => state);
  const [data, setData] = useState([])
  const [activeData, setActiveData] = useState([])

  console.log(params.id);
  useEffect(() => {
    dispatch(getSingleRecruiter(params.id));
    axios
      .get(`/api/companies/recruiters/${params.id}`)
      .then((res) => res.data)
      .then((values) => setData(values));

    axios
      .get(`/api/companies/recruiters/active/${params.id}`)
      .then((res) => res.data)
      .then((values) => setActiveData(values));
  }, [params.id, dispatch]);

  const {
    name,
    surname,
    email,
    country,
    state,
    bio,
    img,
    rating,
    favoriteArea1,
    favoriteArea2,
    favoriteArea3,
    seniority1,
    seniority2,
    seniority3,
  } = singleRecruiter;

  return (
    <div>
      {singleRecruiter.id ? (
        <div className={styles.container}>
          {!singleRecruiter.active && < h2 className={styles.inactive}>Recluta inactivo</h2>}
          <div className={styles.picture}>
            <h2>
              <SimpleRating rating={rating} />
            </h2>
            <img src={img} alt={surname} />
            <div className={styles.bio}>
              <h2>
                <span>{bio}</span>
              </h2>
            </div>
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.info}>
              <p>
                Nombre: <span>{name}</span>
              </p>
              <p>
                Apellido: <span>{surname}</span>
              </p>
              <p>
                Email: <span>{email}</span>
              </p>
              <p>
                Pais: <span>{country}</span>
              </p>
              <p>
                Provincia: <span>{state && state.name}</span>
              </p>
            </div>

            <div className={styles.info}>
              <p>
                Area Favorita 1: <span>{favoriteArea1}</span>
              </p>
              <p>
                Area Favorita 2: <span>{favoriteArea2}</span>
              </p>
              <p>
                Area Favorita 3: <span>{favoriteArea3}</span>
              </p>
              <p>
                Seniority 1: <span>{seniority1}</span>
              </p>
              <p>
                Seniority 2: <span>{seniority2}</span>
              </p>
              <p>
                Seniority 3: <span>{seniority3}</span>
              </p>
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
                <h2>Total de Busquedas: {data.length}</h2>

                <RecruiterActiveTable activeJobs={data} />
              </div>
            </Fade>
          </Modal>
        </div>
      ) : (
        <div className={style.circularProgress}>
          <CircularProgress disableShrink />
        </div>
      )}
      <div className={styles.busquedascontainer}>
        <h2>Total de Busquedas Activas: {activeData.length}</h2>
        <RecruiterActiveTable activeJobs={activeData} />
      </div>
      <div className={styles.btn}>
        <BtnHistoryJobs
          onClick={() => setOpen(true)}
          name="Historial de busquedas"
        ></BtnHistoryJobs>
        <BtnGoBack
          className={styles.goBack}
          onClick={history.goBack}
          name="Atras"
        ></BtnGoBack>
      </div>
    </div>
  );
}

export default SingleView
