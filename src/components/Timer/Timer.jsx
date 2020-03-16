import React from 'react';
import classes from "./Timer.module.css"

const Timer = (props) => {
	return	(
		<div className={classes.content}>
			Timer
			<div className={classes.timer}>timer</div>
		</div>
		)
} 	

export default Timer;