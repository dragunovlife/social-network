import React from 'react';
import classes from './Header.module.css';

const Header = () => {
  return <header className={classes.header}>
    <img className={classes.logo} src="https://c7.hotpng.com/preview/10/44/851/sydney-bears-australian-ice-hockey-league-logo-sport-sports.jpg" />
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