import React, { useEffect, useState } from 'react'
import axios from 'axios'
import s from './index.module.css'

function PromedioBusquedasporRecruiters() {
  const [jobs, setJobs] = useState({})

  useEffect(() => {
    axios
      .get('/api/jobs/opened')
      .then((res) => res.data)
      .then((jobs) => setJobs(jobs))
  }, [])

  return (
    <>
      {jobs && (
        <div className={s.contenedor}>
          <h1 className={s.title}>Promedio busquedas por reclutador</h1>
          <h2>Total Busquedas Asignadas: {jobs.totalBusquedasAsignadas}</h2>
          <h2>Total Reclutadores Unicos: {jobs.totalRecruitersUnicos}</h2>
          <h1 className={s.promedio}>Promedio: {jobs.promedio}</h1>
        </div>
      )}
    </>
  )
}

export default PromedioBusquedasporRecruiters
