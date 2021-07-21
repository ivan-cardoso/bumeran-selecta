import React, { useEffect, useState } from 'react'
import axios from 'axios'

function TopCompanies() {
  const [top3, setTop3] = useState([])
  useEffect(() => {
    axios
      .get('/api/jobs/top3')
      .then((res) => res.data)
      .then((companies) => {
        console.log(companies)
        setTop3(companies)
      })
  }, [])
  return (
    <div>
      <h1>Top 3 Companias</h1>
      {top3.map((companies) => {
        const { CompanyCount, companyId } = companies
        return (
          <div key={companyId}>
            <p> Total Busquedas: {CompanyCount}</p>
            <p>Nombre: {companies['company.name']}</p>
          </div>
        )
      })}
    </div>
  )
}

export default TopCompanies
