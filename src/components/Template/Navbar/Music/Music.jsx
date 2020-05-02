import React from 'react';
import classes from "./Music.module.css";
import { NavLink } from 'react-router-dom';

const Mmm = () => {
	alert('Ретроспектива');
	alert('Препарирование');
	alert('Процесс трансформации становится тем действием, которое мы осознаём только в ретроспективе.');
}

const Music = (props) => {
	return (
		<div className={classes.content}>
		<h1 onClick={Mmm}>Music</h1>
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
		</div>
		)
}

export default Music;

