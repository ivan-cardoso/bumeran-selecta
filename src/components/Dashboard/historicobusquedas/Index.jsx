import axios from 'axios'
import React, { useEffect, useState } from 'react'
import s from './index.module.css'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
let dayDict = {}

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

export default function ChartHistoric() {
  const [historicData, setHistoricData] = useState([])
  const [values, setValues] = useState([])

  useEffect(() => {
    const arrayOfDates = []
    for (let i = 6; i >= 0; i--) {
      var date = new Date()
      date.setDate(date.getDate() - i)
      var finalDate =
        date.getDate() +
        '/' +
        (date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1)
      arrayOfDates.push({ date: finalDate })
    }

    axios
      .get('/api/jobs/historic')
      .then((res) => res.data)
      .then((historicByDate) => {
        historicByDate.map((record) => {
          const [year, month, other] = record.date.split('-')
          const [day, rest] = other.split('T')
          const returnValue = `${day}/${month}`
          dayDict[returnValue] = parseInt(record.total)
        })

        const ArrayOfResultsForVisualiation = arrayOfDates.map((value) => {
          const { date } = value

          if (dayDict[date]) return { date: date, total: dayDict[date] }
          else return { date: date, total: 0 }
        })

        setHistoricData(ArrayOfResultsForVisualiation)
      })

    // console.log(ArrayOfResultsForVisualiation)
  }, [])

  return (
    <div className={s.contenedor}>
      <div className={s.title}>
        <h1> Nuevas busquedas los ultimos 7 dias</h1>
      </div>
      <div className={s.grafico}>
        <BarChart
          width={500}
          height={300}
          data={historicData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='date' />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey='total' fill='#82ca9d' />
        </BarChart>
      </div>
    </div>
  )
}
