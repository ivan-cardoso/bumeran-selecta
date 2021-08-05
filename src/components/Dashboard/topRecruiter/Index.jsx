import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AiFillTrophy } from 'react-icons/ai'
import s from './index.module.css'
import RatingView from "../../RecruiterSingleView/RatingView";


function TopRecruiter() {
  const [top3, setTop3] = useState([])
  useEffect(() => {
    axios
      .get('/api/recruiters/topthree')
      .then((res) => res.data)
      .then((recruiters) => setTop3(recruiters))
  }, [])
  return (
    <div className={s.contenedor}>
      <h1 className={s.title}>Top 3 Reclutas</h1>
      {top3.map((recruiter, index) => (
        <div className={s.content} key={recruiter.id}>
          <div className={s.bestRecruiter}>
            <p>Nombre: {recruiter.name}</p>
            {<RatingView rating={recruiter.rating} />}
          </div>
          <div className={s.trofeo}>
            <span>
              {index + 1} <AiFillTrophy />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TopRecruiter
