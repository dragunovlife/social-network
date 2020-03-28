import React from 'react';
import classes from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';

//https://github.com/kevinsqi/react-circular-progressbar/tree/3f64e7bdaf878cf6d96e5e9bba7cefde62d74116
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const percentage = 27;

const progressbar = <CircularProgressbar
  value={percentage}
  text={`${percentage}%`}
  styles={buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 0.25,

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'butt',

    // Text size
    textSize: '16px',

    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,

    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',

    // Colors
    pathColor: `rgb(74,0,224, ${percentage / 10})`,
    textColor: '#f88',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
  })}
/>;

const Sidebar = () => {
  return (
    <div className={classes.side}>
      <div className={classes.progressbar}> 
      <h1>React</h1>
      <h6>Курс "React JS - путь самурая 1.0</h6>
      { progressbar }
      <h3>Выполнено 27%</h3>
      <p>Отследить прогрес</p>
      <h3>Осталось 73%</h3>
      <p>Отследить остаток</p>
      </div>
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