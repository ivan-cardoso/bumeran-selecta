import React from 'react'
import style from './index.module.css'
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar/Index'


const Home = () => {
  

  return (
    <div className={style.container} >

      <Sidebar />

      <div className={style.home}>
        <h1>Home</h1>
      </div>
      <div className={style.footer}>

      </div>
    </div>
  )
}

export default Home
