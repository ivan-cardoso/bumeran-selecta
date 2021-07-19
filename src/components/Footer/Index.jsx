import React from 'react'
import style from './index.module.css'
import logo from '../../utils/Navent-iso-blanco.svg'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
  
  return (
      <div className={style.container}>
        <div className={style.logo}>
          <img src={logo} alt='navent' />
        </div>
        <div className={style.slogan}>
          <h1>Cambiando la forma de contratar</h1>
        </div>
        <div className={style.social}>
          <div className={style.icons}>
            <LinkedInIcon style={{fontSize:50}} />
            <InstagramIcon style={{fontSize:50}} />  
          </div>
          <h3>Navent@Navent.com</h3>
          <h3>+56xxxxxxx</h3>
        </div>
      </div>
  )
}

export default Footer
