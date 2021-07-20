import React from 'react'
import style from './index.module.css'
import Sidebar from '../Sidebar/Index'
import Footer from '../Footer/Index'

const Home = () => {
  return (
    <div className={style.container}>
      <Sidebar />
      <div className={style.home}>
        <h1>Home</h1>
      </div>
    </div>
  )
}

export default Home
