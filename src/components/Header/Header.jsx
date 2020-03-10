import React from 'react';
import classes from './Header.module.css';

const Header = () => {
  return <header className={classes.header}>
    <img src="https://avatars.mds.yandex.net/get-pdb/236760/db1cde15-b660-4984-a34e-570f1fc48587/s1200" />
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