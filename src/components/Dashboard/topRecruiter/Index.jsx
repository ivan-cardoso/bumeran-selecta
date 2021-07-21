import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function TopRecruiter() {
  const [top3, setTop3] = useState([])
  useEffect(() => {
    axios
      .get('/api/recruiters/topthree')
      .then((res) => res.data)
      .then((recruiters) => setTop3(recruiters))
  }, [])
  return (
    <div>
      <h1>Top 3 Recruiters</h1>
      {top3.map((recruiter) => (
        <div key={recruiter.id}>
          <p> Rating: {recruiter.rating}</p>
          <p>Nombre: {recruiter.name}</p>
        </div>
      ))}
    </div>
  )
}

export default TopRecruiter
