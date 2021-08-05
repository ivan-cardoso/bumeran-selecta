import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaMedal } from 'react-icons/fa'
import s from './index.module.css'

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
    <div className={s.contenedor}>
      <h1 className={s.title} >Top 3 Compañias</h1>
      {top3.map((companies, index) => {
        const { CompanyCount, companyId } = companies
        return (
          <div className={s.content} key={companyId}>
            <div className={s.bestCompanies}>
              <p>Nombre: {companies['company.name']}</p>
              <p> Total Busquedas: {CompanyCount}</p>
            </div>
            <div className={s.trofeo}>
              <span>{index + 1} <FaMedal /> </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TopCompanies
