import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import s from './sidebar.css'
import * as IoIcons from 'react-icons/io'
import { MdWork } from 'react-icons/md'

const Sidebar = () => {
  const SidebarData = [
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
  ]
  const [showSidebar, setShowSidebar] = useState(true)
  return (
    <div className='div-icon'>
      <FaIcons.FaBars
        onClick={() => setShowSidebar(!showSidebar)}
        className='iconImage'
      />
      <div className='sidebarContainer'>
        {SidebarData?.map((item, index) => {
          return (
            <div className='sidebarDiv'>
              <div key={index} className={item.cName}>
                <h1 className='navbaricon'> {item.icon}</h1>
              </div>
              <div className={showSidebar ? 'sidebarDiv' : 'hideSidebar'}>
                <Link to={item.path}>
                  <h1 className='navbartext'>{item.title}</h1>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar

// <div key={index} className={item.cName}>
//       //   <Link to={item.path}>
//       //     <h1 className='icon-container'>
//       //       {item.icon}
//       //       <span className={s.names}>{item.title}</span>
//       //     </h1>
//       //   </Link>
//       // </div>
