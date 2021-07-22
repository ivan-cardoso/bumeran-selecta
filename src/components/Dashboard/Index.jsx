import React from 'react'
import BusquedasActivas from './busquedasActivas/Index'
import ChartbyArea from './graficoPorArea/Index'
import CharyBySeniority from './graficoPorSeniority/Index'
import ChartHistoric from './historicobusquedas/Index'
import PromedioBusquedasporRecruiters from './promediobusqActivas/Index'
import TopCompanies from './topCompanies/Index'
import TopRecruiter from './topRecruiter/Index'
import s from './index.module.css'

function Dashboard() {
  return (
    <div className={s.container}>

      <div className={s.top}>
        <div className={s.recruiters}>
          <TopRecruiter />
        </div>
        <div className={s.companies}>
          <TopCompanies />
        </div>
      </div>

      <div className={s.busquedas}>

        <div className={s.activas}>
          <BusquedasActivas />
        </div>
        <div className={s.promedio}>
          <PromedioBusquedasporRecruiters />
        </div>

      </div>

      <div className={s.areaAndSeñority}>
        
        <div className={s.area}>
          <ChartbyArea />
        </div>
        <div className={s.señority}>
          <CharyBySeniority />
        </div>

      </div>

      <div className={s.graficos}>
        <div className={s.graficoUno}>
          <ChartHistoric />
        </div>
      </div>

    </div>
  )
}

export default Dashboard
