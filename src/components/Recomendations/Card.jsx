import React, { useEffect, useState } from 'react'
import axios from 'axios'
import s from './index.module.css'
import BTN from '../UX/Buttons/BtnGoBack'
import SimpleRating from '../RecruiterSingleView/RatingView'
import { GoLocation } from 'react-icons/go'
import { AiOutlineMail } from 'react-icons/ai'
import { SiWheniwork } from 'react-icons/si'
import { MdPersonPin } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs'
import { message } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getAllJobs } from '../../store/jobs/jobs'
import {getSingleJob} from "../../store/jobs/getSingleJob"

function Card({ selectedJob, setOpenRecruiter , setReclutadorAsignado}) {
  const { id, area, seniority } = selectedJob
  const [recruiters, setRecruiters] = useState([])
  const [activeSelection, setActiveSelection] = useState({})
  const [selectedRecruiter, setSelectedRecruiter] = useState({})

  const { singleJob } = useSelector((state) => state);

  const dispatch = useDispatch()
  useEffect(() => {
    axios
      .post('/api/jobs/findrecomendation', selectedJob)
      .then((res) => res.data)
      .then((recruitersWithPoints) => setRecruiters(recruitersWithPoints))
  }, [])

  const areaMatch = (recruiter) => {
    if (recruiter.favoriteArea1 === area)
      return <span> Area 1: {recruiter.favoriteArea1} </span>

    if (recruiter.favoriteArea2 === area)
      return <span> Area 2: {recruiter.favoriteArea2} </span>

    if (recruiter.favoriteArea3 === area)
      return <span> Area 3: {recruiter.favoriteArea3} </span>
    else return <span> No hay match de Area Favorita </span>
  }
  const seniorityMatch = (recruiter) => {
    if (recruiter.seniority1 === seniority)
      return <span> Seniority 1: {recruiter.seniority1} </span>

    if (recruiter.seniority2 === seniority)
      return <span> Seniority 2: {recruiter.seniority2} </span>

    if (recruiter.seniority3 === seniority)
      return <span> Seniority 3: {recruiter.seniority3} </span>
    else return <span> No hay match de Seniority </span>
  }

  const handleClick = (index, recruiter) => {
    for (let i = 0; i < 3; i++) {
      const element = document.getElementById(`${i}`)
      element.classList = s.cardcontainer
    }

    //add selected
    const element = document.getElementById(`${index}`)
    element.classList.add(s.active)
    setActiveSelection({ recruiterId: recruiter.id, jobId: id })
    setSelectedRecruiter(recruiter)
  }

  const handleClose = () => {
    setOpenRecruiter(false)
  }

  const handleConfirm = (recruiter) => {
    axios.post('/api/jobs/assignrecruiter', activeSelection).then(() => {
      setOpenRecruiter(false)
      message.success('Recruta asignado correctamente')
      dispatch(getAllJobs())
      dispatch(getSingleJob({ 
        ...singleJob, 
        recruiter:selectedRecruiter, 
        recruiterId : selectedRecruiter.id,
        isOpen : "asignada"
      }));
      // setReclutadorAsignado(true)
    })
  }

  return (
    <>
      <div className={s.divcontainer}>
        <div  className={s.cardSection}>

        
        {recruiters.map((selectedRecruiter, index) => {
          const { porcentajeMatch, totalPoints, recruiter } = selectedRecruiter

          return (
            <div
              className={s.cardcontainer}
              id={index}
              key={recruiter.id}
              onClick={() => handleClick(index, recruiter)}
            >
              {/* <h1>{totalPoints}</h1> */}
              <h3 className={s.maintitle}>
                {recruiter.name} {recruiter.surname}
              </h3>
              <div className={s.top}>
                <img
                  src={recruiter.img}
                  alt={recruiter.name}
                  className={s.topimage}
                ></img>
                <div className={s.topright}>
                  <h4>Rating: {<SimpleRating rating={recruiter.rating} />}</h4>
                  <div className={s.matchContainer} >
                    <h4>Match:</h4>
                    <div className={s.porcentajeMatch}>
                      <p>{porcentajeMatch}%</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={s.detailsContainer}>
                <h3>
                  <BsSearch color={"#f13d89"} className={s.iconDetails} />
                  {'   '}
                  {!recruiter.activeSearch
                    ? 'No tiene busq. activas...'
                    : recruiter.activeSearch === 1
                    ? `${recruiter.activeSearch} busqueda activa`
                    : `${recruiter.activeSearch} busquedas activas`}
                </h3>
                <h3>
                  <GoLocation className={s.iconDetails} color={"#f13d89"}/> {'   '} {recruiter.country} - {recruiter.state}
                </h3>
                <h3>
                  <AiOutlineMail className={s.iconDetails} color={"#f13d89"}/> {recruiter.email}
                </h3>
                <h3>
                  <SiWheniwork className={s.iconDetails} color={"#f13d89"}/> {'   '} {areaMatch(recruiter)}
                </h3>
                <h3>
                  <MdPersonPin className={s.iconDetails} color={"#f13d89"}/> {'   '}
                  {seniorityMatch(recruiter)}
                </h3>
              </div>
            </div>
          )
        })}
      </div>

      <div className={s.btncontainer}>
        <BTN
          // style={{ width: '200px', height: '50px', fontSize: '20px' }}
          name='Confirmar'
          onClick={()=> handleConfirm()}
        ></BTN>
        <BTN
          // style={{ width: '200px', height: '50px', fontSize: '20px' }}
          name='Cancelar'
          onClick={handleClose}
          ></BTN>
      </div>

    </div>

    </>
  )
}

export default Card
