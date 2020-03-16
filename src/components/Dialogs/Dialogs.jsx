import React from 'react';
import classes from "./Dialogs.module.css"
import {NavLink} from 'react-router-dom';

const Dialogs = (props) => {
	return	(
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
				<div className={classes.dialog + ' ' + classes.active}>
					<NavLink to="/dialogs/1">Alex</NavLink>
				</div>
				<div className={classes.dialog}>
					<NavLink to="/dialogs/2">Dima</NavLink>
				</div>
				<div className={classes.dialog}>
					<NavLink to="/dialogs/3">Roman</NavLink>
				</div>
				<div className={classes.dialog}>
					<NavLink to="/dialogs/4">Sveta</NavLink>
				</div>
				<div className={classes.dialog}>
					<NavLink to="/dialogs/5">Viktor</NavLink>
				</div>
			</div>
			
			<div className={classes.messages}>
				<div className={classes.message}>Hi</div>
				<div className={classes.message}>How are your?</div>
				<div className={classes.message}>Yo</div>
			</div>
		</div>

		

		)
} 	

export default Dialogs;