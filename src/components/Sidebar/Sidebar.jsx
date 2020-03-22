import React from 'react';
import classes from './Sidebar.module.css';
import {NavLink} from 'react-router-dom';

const Sidebar = () => {
  return (
  <div className={classes.side}>
    <div className={classes.triangleright}>
      <NavLink to="/timer" activeClassName={classes.activeLink}>1</NavLink>
    </div>
    <div className={classes.triangleleft}>
      <NavLink to="/settings" activeClassName={classes.activeLink}>2</NavLink>
    </div>
    <div className={classes.triangleright}>
      <NavLink to="/settings" activeClassName={classes.activeLink}>3</NavLink>
    </div>
    <div className={classes.triangleleft}>
      <NavLink to="/settings" activeClassName={classes.activeLink}>4</NavLink>
    </div>
    <div className={classes.triangleright}>
      <NavLink to="/settings" activeClassName={classes.activeLink}>5</NavLink>
    </div>
    <div className={classes.triangleleft}>
      <NavLink to="/settings" activeClassName={classes.activeLink}>6</NavLink>
    </div>
    <div className={classes.triangleright}>
      <NavLink to="/settings" activeClassName={classes.activeLink}>7</NavLink>
    </div>
  </div>
  )
}

export default Sidebar;