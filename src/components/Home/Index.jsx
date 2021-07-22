import React from 'react'
import style from './index.module.css'
import Sidebar from '../Sidebar/Index'
import Dashboard from '../Dashboard/Index'

const Home = () => {
  return (
    <div className={style.container}>
      <Sidebar />
      <div className={style.home}>
        <Dashboard />
      </div>
    </div>
  )
}

export default Home
