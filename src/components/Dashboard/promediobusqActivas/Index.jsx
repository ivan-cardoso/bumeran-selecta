import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
    <div>
      <h1>Promedio de busquedas por reclutador </h1>
      <h2>{averageByRecruiter}</h2>
      <p>los reclutadores deben tener al menos 1 busqueda activa</p>
    </div>
  )
}

export default PromedioBusquedasporRecruiters
