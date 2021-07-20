import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//import * as IoIcons from 'react-icons/io'
import * as FaIcons from 'react-icons/fa'
//import * as AiIcons from 'react-icons/ai'
import SidebarData from './SidebarData'
import s from './sidebar.css'
import { useSelector } from 'react-redux'

const Sidebar = () => {

  
  const [showSidebar, setShowSidebar] = useState(true)
  const { user } = useSelector((state) => state)

  return (
    <div className='div-icon'>
      <FaIcons.FaBars
        onClick={() => setShowSidebar(!showSidebar)}
        className='iconImage'
      />
      <div className={showSidebar ? 'sidebarContainer' : 'hideSidebar'}>

        {SidebarData?.map((item, index) => {

          return (
            <div key={index} className={item.cName}>
              <Link to={user.uid ? item.path : '/login'}>
                <h1 className='icon-container'>
                  {item.icon}
                  <span className={s.names}>{item.title}</span>
                </h1>
              </Link>
            </div>
          )
        })}

        {/* <nav className={s.navmenu}>
          <ul className='navmenuitems'>
            {SidebarData?.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={user.uid ? item.path : '/login'}>
                    {item.icon}
                    <span className={s.names}>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav> */}
      </div>
    </div>
  )
}

export default Sidebar
