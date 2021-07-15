import React from 'react'
import style from './index.module.css'
import { Link } from 'react-router-dom'
import NavBar from '../Navbar/Index'

const Home = () => {
  return (
    <div className='container'>
      <div className={style.navbar}>
        <h1>Navbar</h1> 
      </div>
      <div className={style.home}>
        <h1>Home</h1>
      </div>
    </div>
  )
}

export default Home
