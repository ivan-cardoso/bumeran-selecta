import React, { useEffect, useState, PureComponent } from 'react'
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  Legend,
} from 'recharts'

// import { PieChart, Pie, Cell, Legend } from 'recharts'
import axios from 'axios'
import s from './index.module.css'

function ChartbyArea() {
  const [areas, setAreas] = useState([])
  const [legend, setLegend] = useState([])

  useEffect(() => {
    axios
      .get('/api/jobs/jobbyarea')
      .then((res) => res.data)
      .then((areasSearch) => {
        const formatedArea = areasSearch.map((singleArea) => {
          return {
            name: singleArea['area.name'],
            value: parseInt(singleArea.value),
          }
        })
        setAreas(formatedArea)
      })
  }, [])

  class CustomizedAxisTick extends PureComponent {
    render() {
      const { x, y, stroke, payload } = this.props

      return (
        <g transform={`translate(${x},${y})`}>
          <text
            fontSize='10px'
            x={0}
            y={0}
            dy={16}
            textAnchor='end'
            fill='#666'
            transform='rotate(-30)'
          >
            {payload.value}
          </text>
        </g>
      )
    }
  }

  return (
    <div className={s.contenedor}>
      <div className={s.title}>
        <h1>Busquedas por Area</h1>
      </div>
      <div className={s.graficos}>
        <BarChart
          width={900}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          height={250}
          data={areas}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis
            dataKey='name'
            height={130}
            tick={<CustomizedAxisTick />}
            interval={0}
          />

          <YAxis />
          <Tooltip />
          <Bar dataKey='value' fill='#8884d8' />
        </BarChart>
      </div>
    </div>
  )
}

export default ChartbyArea
