import React from 'react';
import classes from './Header.module.css';

const Header = () => {
  return <header className={classes.header}>
    <img className={classes.logo} src="../logo1.png" />
    <ul>
      <a><li>Home</li></a>
      <a><li>Discussion</li></a>
      <a><li>Weather</li></a>
      <a><li>Pages</li></a>
      <a><li>Blog</li></a>
      <a><li>Сделать таймер</li></a>
      <a><li>Сделать список задач</li></a>
      <a><li>Прогрес бар</li></a>
    </ul>
  </header>

}

export default Header;