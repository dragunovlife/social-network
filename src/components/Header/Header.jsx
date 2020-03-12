import React from 'react';
import classes from './Header.module.css';

const Header = () => {
  return <header className={classes.header}>
    <img className={classes.logo} src="../logo1.png" />
    <ul>
      <li>Home</li>
      <li>Discussion</li>
      <li>Weather</li>
      <li>Pages</li>
      <li>Blog</li>
    </ul>
  </header>
}

export default Header;