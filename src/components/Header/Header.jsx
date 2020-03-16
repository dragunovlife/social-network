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
      <li>Сделать таймер</li>
      <li>Сделать список задач</li>
      <li>Прогрес бар</li>
    </ul>
  </header>
  
}

export default Header;