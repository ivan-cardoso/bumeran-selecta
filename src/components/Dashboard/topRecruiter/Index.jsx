import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AiFillTrophy } from 'react-icons/ai'
import s from '.././index.module.css'

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
      <h1 className={s.title}>Top 3 Recruiters</h1>
      {top3.map((recruiter, index) => (
        <div key={recruiter.id}>
          <AiFillTrophy className={s.icon} />
          <span className={s.position}>{index + 1}</span>
          <p className={s.rating}> Rating: {recruiter.rating}</p>
          <p className={s.nombre}>Nombre: {recruiter.name}</p>
        </div>
      ))}
    </div>
  )
}

export default TopRecruiter
