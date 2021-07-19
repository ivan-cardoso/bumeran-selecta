import React from 'react'
import style from './index.module.css'
import logo from '../../utils/Navent-iso-blanco.svg'

const Footer = () => {
  
  return (
    
      <div  className={style.footer}>
      <img 
        className={style.imagen}
        src={logo}
        alt=""
      />
      </div>
   
  )
}

export default Footer
