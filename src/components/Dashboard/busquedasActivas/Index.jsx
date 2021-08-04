import React, { useEffect, useState } from 'react'
import axios from 'axios'
import s from './index.module.css'
import { PieChart, Pie, Cell, Legend } from 'recharts'

function BusquedasActivas() {
  const [openedJobs, setOpenedJobs] = useState([])
  const [total, setTotal] = useState('')
  useEffect(() => {
    axios
      .get('/api/jobs/filteredbystate')
      .then((res) => res.data)
      .then((jobs) => {
        if (jobs) {
          const formatedJobs = jobs.detailed.map((job) => ({
            name: job.isOpen,
            value: parseInt(job.value),
          }))
          setOpenedJobs(formatedJobs)
          setTotal(jobs.total)
        }
      })
  }, [])

  const colors = [
    '#A83264',
    '#A88159',
    // '#6364d6',
    '#242331',
    '#3C312F',
    '#533E2D',
    '#90A45E',
    '#A27035',
    '#AD7E40',
    '#B88B4A',
    '#CBAB64',
    '#CBAB64',
    '#DDCA7D',
  ]
  const RADIAN = Math.PI / 180

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.6
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text
        x={x}
        y={y}
        fill='white'
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline='central'
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }
  return (
    <div className={s.contenedor}>
      <div className={s.title}>
        <h1>Detalle por estado</h1>
      </div>
      <div className={s.graficos}>
        <PieChart width={300} height={200}>
          <Legend
            cx='45%'
            // cy='10%'
            height={1}
            width={350}
            align='center'
            verticalAlign='bottom'
          />
          <Pie
            data={openedJobs}
            cx='55%'
            dataKey='value'
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={90}
          >
            {openedJobs.map((areas, index) => (
              <Cell key={index} fill={colors[index]} />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  )
}

// return (
//   <div className={s.contenedor}>
//     <h1 className={s.title}>Total Busquedas</h1>
//     {openedJobs.map((job, index) => (
//       <div className={s.isOpenContainer} key={index}>
//         <h2 className={s.info}>
//           {job.isOpen}s: <span>{job.value}</span>
//         </h2>
//       </div>
//     ))}
//     <h2 className={s.total}>Total: {total}</h2>
//   </div>
// )
// }

export default BusquedasActivas
