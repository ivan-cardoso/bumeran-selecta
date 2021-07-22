import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import NavBar from '../Navbar/Index';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import BusinessIcon from '@material-ui/icons/Business';
import zIndex from '@material-ui/core/styles/zIndex';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    justifyContent: 'flex-start',
    marginTop: 50,
    height: '100%',
    background: 'white',
  },
  drawerContainer: {
    overflow: 'auto',
    height: '100%'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        
          <NavBar />
        
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <Divider />
              <ListItem button >
                <ListItemIcon><PeopleAltIcon /></ListItemIcon>
                <Link to='/recruiters' style={{color: 'black'}} > <ListItemText primary='Recruiters' /> </Link>
              </ListItem>
            <Divider />
            <Divider />
              <ListItem button >
                <ListItemIcon><BusinessIcon /></ListItemIcon>
                <Link to='/companies' style={{color: 'black'}} > <ListItemText primary='Companies' /> </Link>
              </ListItem>
            <Divider />
            <Divider />
              <ListItem button >
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <Link to='/' style={{color: 'black'}} > <ListItemText primary='Algo mas' /> </Link>
              </ListItem>
            <Divider />
          </List>
          
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        
      </main>
    </div>
  );
}



// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// //import * as IoIcons from 'react-icons/io'
// import * as FaIcons from 'react-icons/fa'
// //import * as AiIcons from 'react-icons/ai'
// import SidebarData from './SidebarData'
// import s from './index.module.css'
// import { useSelector } from 'react-redux'

// const Sidebar = () => {
//   const [showSidebar, setShowSidebar] = useState(true)

//   return (
//     <div className='container'>
//       <FaIcons.FaBars
//         onClick={() => setShowSidebar(!showSidebar)}
//         className='iconImage'
//       />
//       <div className={showSidebar ? 'sidebarContainer' : 'hideSidebar'}>
//         {SidebarData?.map((item, index) => {
//           return (
//             <div key={index} className={item.cName}>
//               <Link to={item.path}>
//                 <h1 className='icon-container'>
//                   {item.icon}
//                   <span className={s.names}>{item.title}</span>
//                 </h1>
//               </Link>
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default Sidebar