import axios from 'axios'
import React, { useEffect, useState } from 'react'
import s from './index.module.css'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
let dayDict = {}

export default function ChartHistoric() {
  const [historicData, setHistoricData] = useState([])

  // const [values, setValues] = useState([]) No se esta utilizando

  useEffect(() => {
    const arrayOfDates = []
    for (let i = 6; i >= 0; i--) {
      var date = new Date()
      date.setDate(date.getDate() - i)
      const days = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
      const month =
        date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
      var finalDate = days + '/' + month

      arrayOfDates.push({ date: finalDate })
    }

    console.log(arrayOfDates)

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
          width={900}
          height={400}
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
