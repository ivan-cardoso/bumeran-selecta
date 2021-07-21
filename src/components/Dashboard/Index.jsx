import React from 'react'
import BusquedasActivas from './busquedasActivas/Index'
import ChartbyArea from './graficoPorArea/Index'
import CharyBySeniority from './graficoPorSeniority/Index'
import ChartHistoric from './historicobusquedas/Index'
import PromedioBusquedasporRecruiters from './promediobusqActivas/Index'
import TopCompanies from './topCompanies/Index'
import TopRecruiter from './topRecruiter/Index'

function Dashboard() {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <BusquedasActivas />
        <PromedioBusquedasporRecruiters />
      </div>
      <div style={{ display: 'flex' }}>
        <TopRecruiter />
        <TopCompanies />
      </div>
      <div style={{ display: 'flex' }}>
        <ChartbyArea />
        <CharyBySeniority />
      </div>
      <ChartHistoric />
    </div>
  )
}

export default Dashboard
