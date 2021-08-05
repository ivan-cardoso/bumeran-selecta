import React from 'react'
import { Link } from 'react-router-dom'
import * as IoIcons from 'react-icons/io'
import { MdWork } from 'react-icons/md'
import { AiFillHome } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import './sidebar.css'

const Sidebar = () => {
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

export default Sidebar
