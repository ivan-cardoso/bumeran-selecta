import React from 'react'
import style from './index.module.css'
import { Link } from 'react-router-dom'
import NavBar from '../Navbar/Index'
import Footer from '../Footer/Index'


const Home = () => {
  return (
    <div className={style.container} >
      
        <NavBar />
      <div className={style.home}>
        <h1>Home</h1>
      </div>
      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default Home
