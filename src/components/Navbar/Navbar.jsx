import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className={classes.nav}>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/users" activeClassName={classes.activeLink}>Users</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs" activeClassName={classes.activeLink}>Messages</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/target" activeClassName={classes.activeLink}>Target</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/event" activeClassName={classes.activeLink}>Event</NavLink>
      </div>
        <div className={classes.item}>
        <NavLink to="/todolist" activeClassName={classes.activeLink}>Todolist</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/music" activeClassName={classes.activeLink}>Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/test" activeClassName={classes.activeLink}>Test</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/notebook" activeClassName={classes.activeLink}>Notebook</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/tools" activeClassName={classes.activeLink}>Tools</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/questions" activeClassName={classes.activeLink}>Questions</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/idea" activeClassName={classes.activeLink}>Idea</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/settings" activeClassName={classes.activeLink}>Settings</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;