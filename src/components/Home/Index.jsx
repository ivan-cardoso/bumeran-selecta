import React from 'react'
import style from './index.module.css'
import Sidebar from '../Sidebar/Index'
import Dashboard from '../Dashboard/Index'
import Footer from "../Footer/Index";

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.home}>
        <Dashboard />
      </div>
      <Footer />
    </div>
  );
}

export default Home
