import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import * as IoIcons from 'react-icons/io'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import SidebarData from './SidebarData'
import s from './sidebar.css'


const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => {
      return setSidebar(!sidebar)
    }

    return (


        <div>
            <Link to='#'>
      <FaIcons.FaBars onClick={showSidebar}/>
      </Link>
      
      <nav className={sidebar ? s.navmenuactive : s.navmenu }>
        <ul className={s.navmenuitems}>
          <li className={s.navbartoggle}>
            <Link to='#' className={s.menubars}>
             <AiIcons.AiOutlineClose />
            </Link>
          </li>
        

          {SidebarData?.map((item, index) => {
            return (

              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            )

          })}
        </ul>
      </nav>
        </div>
    )
}

export default Sidebar

