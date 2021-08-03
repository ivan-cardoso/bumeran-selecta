import React from 'react'
import { Link } from 'react-router-dom'
// import * as FaIcons from 'react-icons/fa'
import s from './sidebar.css'  // No entiendo como se esta utilizando si en el Wrng aparece que no. (Christian)
import * as IoIcons from 'react-icons/io'
import { MdWork } from 'react-icons/md'
import { AiFillHome } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const user = useSelector((state) => state.user)
  const SidebarData = [
    {
      title: 'Home',
      path: '/',
      icon: <AiFillHome />,
      cName: 'nav-text',
    },
    {
      title: 'Reclutadores',
      path: '/recruiters',
      icon: <IoIcons.IoMdPeople />,
      cName: 'nav-text',
    },
    {
      title: 'Empresas',
      path: '/companies',
      icon: <IoIcons.IoIosBusiness />,
      cName: 'nav-text',
    },
    {
      title: 'Busquedas',
      path: '/jobs',
      icon: <MdWork />,
      cName: 'nav-text',
    },
    {
      title: 'Usuarios',
      path: '/users',
      icon: <FaUserAlt />,
      cName: 'nav-text',
    },
  ]
  return (
    <div className='container'>
      {SidebarData?.map((item, index) => {
        return (
          <div key={index} className='diviconoytitulo'>
            <h1> {item.icon}</h1>
            <Link to={item.path}>
              <h1 className='titulo'>{item.title}</h1>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Sidebar;