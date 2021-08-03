import React from 'react'
import { Link } from 'react-router-dom'
// import * as FaIcons from 'react-icons/fa'
import s from './sidebar.css'  // No entiendo como se esta utilizando si en el Wrng aparece que no. (Christian)
import * as IoIcons from 'react-icons/io'
import { MdWork } from 'react-icons/md'
import { AiFillHome } from 'react-icons/ai'

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
  ]
  return (
    // <div className='div-icon'>
    //   <div className='sidebarContainer'>
    //     {SidebarData?.map((item, index) => {
    //       return (
    //         <div key={index} className='sidebarDiv'>
    //           <div key={index} className={item.cName}>
    //             <h1 className='navbaricon'> {item.icon}</h1>
    //           </div>
    //           <div className='sidebarDiv'>
    //             <Link to={item.path}>
    //               <h1 className='navbartext'>{item.title}</h1>
    //             </Link>
    //           </div>
    //         </div>
    //       )
    //     })}
    //   </div>
    // </div>
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

// <div key={index} className={item.cName}>
//       //   <Link to={item.path}>
//       //     <h1 className='icon-container'>
//       //       {item.icon}
//       //       <span className={s.names}>{item.title}</span>
//       //     </h1>
//       //   </Link>
//       // </div>
