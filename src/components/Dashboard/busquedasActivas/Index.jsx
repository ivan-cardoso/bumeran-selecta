import React, { useEffect, useState } from 'react'
import axios from 'axios'

function BusquedasActivas() {
  const [openedJobs, setOpenedJobs] = useState([])
  useEffect(() => {
    axios
      .get('/api/jobs/opened')
      .then((res) => res.data)
      .then((jobs) => setOpenedJobs(jobs))
  }, [])

  return (
    <div>
      <h1>Busquedas Activas</h1>
      <h2>{openedJobs.length}</h2>
    </div>
  )
}

export default BusquedasActivas
