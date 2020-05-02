import React from 'react';
import classes from './AppsHeader.module.css';
import { NavLink } from 'react-router-dom';

const AppsHeader = (props) => {
  return (
    <nav className={classes.nav}>
       <div className={classes.item}>
        <NavLink to="/timer" activeClassName={classes.activeLink}>Timer</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/todolist" activeClassName={classes.activeLink}>Todolist</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/testx" activeClassName={classes.activeLink}>TestX</NavLink>
      </div>
    </nav>
  )
}

export default  AppsHeader;
