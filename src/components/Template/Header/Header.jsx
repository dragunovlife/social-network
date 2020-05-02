import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return <header className={classes.header}>
    <h1 className={classes.h1}>Creator</h1>
    {/*<img className={classes.logo} src="../logo1.png" />*/}
    <ul>  
      <li className={classes.item}>
        <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
      </li>
    </ul>
  </header>

}

export default Header;



