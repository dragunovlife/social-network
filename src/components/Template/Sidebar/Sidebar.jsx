import React from 'react';
import classes from './Sidebar.module.css';
import T2 from "../Navbar/Target/Progresscard/Progresscard";

const Sidebar = () => {
  return (
    <div className={classes.side}>
    <div className={classes.progressbar}>
    <T2 />
    </div>
    </div>
    )
}

export default Sidebar;