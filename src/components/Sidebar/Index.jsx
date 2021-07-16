import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import SidebarData from "./SidebarData";
import s from "./sidebar.css";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (


    <div>
      <FaIcons.FaBars 
      onClick={() => setShowSidebar(!showSidebar)}
      
      className={s.iconImage}
      />
      <div className={showSidebar ? "sidebarContainer" : "hideSidebar"}>
        <nav className={s.navmenu}>
          <ul className={s.navmenuitems}>
            {SidebarData?.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className={s.names}>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
