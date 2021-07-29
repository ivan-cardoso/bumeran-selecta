import React, { useEffect, useState } from 'react'
import axios from 'axios'
import s from './index.module.css'

function BusquedasActivas() {
  const [openedJobs, setOpenedJobs] = useState([])
  const [total, setTotal] = useState('')
  useEffect(() => {
    axios
      .get('/api/jobs/filteredbystate')
      .then((res) => res.data)
      .then((jobs) => {
        if (jobs) {
          setOpenedJobs(jobs.detailed)
          setTotal(jobs.total)
        }
      })
  }, [])

  return (
    <div className={s.contenedor}>
      <h1 className={s.title}>Total Busquedas</h1>
      {openedJobs.map((job, index) => (
        <div className={s.isOpenContainer} key={index}>
          <h2 className={s.info}>
            {job.isOpen}s: <span>{job.value}</span>
          </h2>
        </div>
      ))}
      <h2 className={s.total}>Total: {total}</h2>
    </div>
  )
}

export default BusquedasActivas
