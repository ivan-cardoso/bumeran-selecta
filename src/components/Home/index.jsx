import React from 'react'
import style from './index.module.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Soy el Home</h1>
      <Link to='/login'>
        <button>Login</button>
      </Link>
    </div>
  )
}

export default Home
