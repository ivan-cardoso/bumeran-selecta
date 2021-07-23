import React, { useEffect, useState } from 'react'
import axios from 'axios'
import s from './index.module.css'

function PromedioBusquedasporRecruiters() {
  const [jobs, setJobs] = useState([])
  const [averageByRecruiter, setAverageByRecruiter] = useState(0)

  useEffect(() => {
    axios
      .get('/api/jobs/opened')
      .then((res) => res.data)
      .then((jobs) => setJobs(jobs))
  }, [])

  useEffect(() => {
    const totalRecruiters = []
    jobs.map((job) => totalRecruiters.push(job.recruiterId))
    const uniqueRecruiters = new Set(totalRecruiters)
    const totalJobs = jobs.length
    setAverageByRecruiter(jobs.length / uniqueRecruiters.size)
  }, [jobs])

  return (
    <div className={s.contenedor}>
      <h1 className={s.title}>Promedio busquedas por reclutador</h1>
      <h2 className={s.number}>{averageByRecruiter.toFixed(2)}</h2>
      <p className={s.info}>Reclutadores con al menos 1 busqueda activa</p>
    </div>
  )
}

export default PromedioBusquedasporRecruiters
