import React, { useState } from 'react'
import axios from 'axios'
import { Redirect, useHistory, Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Backdrop } from '@material-ui/core'
import style from './index.module.css'
import SimpleRating from '../RecruiterSingleView/RatingView'
import BTN from '../UX/Buttons/BtnGoBack'
import { ImLocation } from 'react-icons/im'
import { MdTimer } from 'react-icons/md'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { GiMoneyStack } from 'react-icons/gi'
import { getSingleJob, getOneSingleJob } from '../../store/jobs/getSingleJob'
import { message } from 'antd'
import ModalRatingClose from '../ModalRatingClose/Index'
import useModal from './useModal'
import ModalRecomendation from '../Recomendations/Index'

const JobSingleView = () => {
  const { singleJob, user } = useSelector((state) => state)

  const dispatch = useDispatch()
  const history = useHistory()
  const { open, setOpen, classes, modalStyle } = useModal()

  const handleSetClose = (job) => {
    setOpen(true)
  }

  const handleViewCompany = (company) => {
    history.push(`/companies/${company.id}`)
  }

  const handleViewRecruiter = (recruiter) => {
    history.push(`/recruiters/${recruiter.id}`)
  }

  const handleDeleteAssing = (Job) => {
    axios
      .put('/api/jobs/deleteassignrecruiter', { jobId: Job.id })
      .then((res) => res.data)
      .then((jobModificated) => {
        message.success('Recluta eliminado correctamente')
        dispatch(getSingleJob({ ...singleJob, ...jobModificated }))
      })
  }

  const params = useParams()

  React.useEffect(() => {
    dispatch(getOneSingleJob(params.id))
  }, [dispatch, params.id])

  const { recruiter } = singleJob

  const [selectedJob, setSelectedJob] = useState({
    area: '',
    seniority: '',
    id: '',
  })
  const [openRecruiter, setOpenRecruiter] = useState(false)
  const assignRecruiter = () => {
    setOpenRecruiter(true)
  }
  const { company } = singleJob

  return (
    <>
      {singleJob.id ? (
        <>
          <div className={style.singleJob}>
            <div className={style.jobDetailsSection}>
              <div className={style.jobDetailsContainer}>
                <div className={style.companyJobDetailsContainer}>
                  <div className={style.imgDetailsContainer}>
                    <div className={style.singleCompanyImg}>
                      <Link to={`/companies/${company.id}`}>
                        <img
                          onClick={() => handleViewCompany(company)}
                          className={style.singleImg}
                          src={singleJob.company.img}
                          alt=""
                        />
                      </Link>
                    </div>

                    <div className={style.singleJobDetails}>
                      <div className={style.singleJobTitleContainer}>
                        <h3 className={style.singleJobTitle}>
                          {singleJob.title}
                        </h3>
                      </div>
                      <div className={style.singleJobLocation}>
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
                        <p>
                          {singleJob.country}, {singleJob.state.name}
                        </p>
                      </div>
                      <h3
                        onClick={() =>
                          Redirect("http://localhost:3000/companies/2")
                        }
                      >
                        Empresa: {singleJob.company.name}
                      </h3>
                      <h3>Area: {singleJob.area.name}</h3>
                    </div>
                  </div>

                  <div className={style.singleJobData}>
                    <h3>Fecha de publicación: {singleJob.date.slice(0, 10)}</h3>
                    <h3>
                      <ImLocation /> {singleJob.country}, {singleJob.state.name}
                    </h3>
                    <h3>
                      {" "}
                      <MdTimer /> {singleJob.typeemloyed.name}
                    </h3>
                    <h3>
                      {" "}
                      <BsFillPersonLinesFill /> {singleJob.modality.name}
                    </h3>
                    <h3>
                      {" "}
                      <GiMoneyStack /> $
                      {singleJob.salary ? singleJob.salary : "No especificado"}
                    </h3>
                  </div>
                </div>
              </div>

              <div className={style.singleJobDescriptionContainer}>
                <div className={style.singleJobDescription}>
                  <h2>Descripción del empleo</h2>
                  <span className={style.singleJobDescriptionText}>
                    {singleJob.description}
                  </span>
                </div>
              </div>
            </div>

            {/* ------------ <RECLUTADOR> --------------- */}
            <div className={style.asignRecruiter}>
              {singleJob.recruiterId ? (
                <>
                  <div className={style.infoRecruiter}>
                    <div className={style.recruiterNameContainer}>
                      <h2>Reclutador/a </h2>
                      {singleJob.isOpen !== "cerrada" ? (
                        <BTN
                          name="Eliminar"
                          onClick={() => handleDeleteAssing(singleJob)}
                        />
                      ) : null}
                    </div>
                    <h3 onClick={() => handleViewRecruiter(recruiter)}>
                      {recruiter.name} {recruiter.surname}
                    </h3>

                    <div className={style.detailsRecruiterContainer}>
                      <img
                        className={style.detailsRecruiterImg}
                        src={recruiter.img}
                        alt={recruiter.name}
                        onClick={() => handleViewRecruiter(recruiter)}
                      />
                      <div className={style.ratingRecruiterContainer}>
                        <h4>
                          Rating {<SimpleRating rating={recruiter.rating} />}
                        </h4>
                        {singleJob.candidates !== null && (
                          <h4>
                            Candidatos presentados: {singleJob.candidates}
                          </h4>
                        )}
                      </div>
                    </div>

                    {singleJob.isOpen === "cerrada" && (
                      <div className={style.commentRecruiterContainer}>
                        {singleJob.recruiterComment ? (
                          <>
                            <h4 className={style.commentRecruiterTitle}>
                              Comentario sobre el reclutador :
                            </h4>
                            <p className={style.commentRecruiter}>
                              {singleJob.recruiterComment}
                            </p>
                          </>
                        ) : (
                          <p className={style.commentRecruiter}>
                            No hay comentarios sobre el reclutador
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <h2 className={style.noRecruiter}>
                  No existe recluta asignado
                </h2>
              )}

              {/* ------------ <CERRAR BÚSQUEDA> --------------- */}
              <div className={style.closeJobContainer}>
                <div className={style.btnSingleJobContainer}>
                  <div className={style.jobIsOpen}>
                    <h3> Estado de la búsqueda</h3>
                    <h5>{singleJob.isOpen}</h5>
                  </div>

                  {singleJob.isOpen !== "cerrada" && (
                    <Button
                      disabled={
                        user.role.name === "auditor" ||
                        user.role.name === "operador"
                      }
                      color="primary"
                      variant="contained"
                      onClick={() => handleSetClose(singleJob)}
                    >
                      Cerrar búsqueda
                    </Button>
                  )}

                  {singleJob.isOpen === "abierta" && (
                    <div style={{ marginTop: "1rem" }}>
                      <Button
                        disabled={
                          user.role.name === "auditor" ||
                          user.role.name === "operador"
                        }
                        color="primary"
                        variant="contained"
                        style={{ width: "100%" }}
                        onClick={() => {
                          setSelectedJob({
                            area: singleJob.area.name,
                            seniority: singleJob.seniority.name,
                            id: singleJob.id,
                          });
                          assignRecruiter();
                        }}
                      >
                        Asignar reclutador
                      </Button>
                    </div>
                  )}
                </div>
              </div>
              {/* ------------ </CERRAR BÚSQUEDA> --------------- */}
            </div>
            {/* ------------ </RECLUTADOR> --------------- */}

            <ModalRatingClose
              singleJob={singleJob}
              open={open}
              setOpen={setOpen}
              className={classes.modal}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{ timeout: 500 }}
              ClassNamePaper={classes.paper}
              modalStyle={modalStyle}
            />

            <ModalRecomendation
              selectedJob={selectedJob}
              open={openRecruiter}
              setOpenRecruiter={setOpenRecruiter}
              className={classes.modal}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{ timeout: 500 }}
              ClassNamePaper={classes.paper}
              modalStyle={modalStyle}
            />
          </div>

          <div className={style.buttonBack}>
            <Button
              color="primary"
              variant="contained"
              onClick={() => history.goBack()}
            >
              Atrás
            </Button>
          </div>
        </>
      ) : (
        <p>...</p>
      )}
    </>
  );
}

export default JobSingleView
