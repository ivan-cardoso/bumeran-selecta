import React, { useEffect, useState } from 'react'
import axios from 'axios'
import s from './index.module.css'

function BusquedasActivas() {
  const [openedJobs, setOpenedJobs] = useState([])
  useEffect(() => {
    axios
      .get('/api/jobs/opened')
      .then((res) => res.data)
      .then((jobs) => setOpenedJobs(jobs))
  }, [])

  return (
    <div className={s.contenedor}>
      <h1 className={s.title}>Busquedas Activas</h1>
      <h2 className={s.number}>{openedJobs.length}</h2>
    </div>
  )
}

export default BusquedasActivas
