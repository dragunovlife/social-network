import React from 'react';
import classes from "./Dialogs.module.css"
import {NavLink} from 'react-router-dom';

const DialogsItem = (props) => { 

	let path ="/dialogs/" + props.id;

	return <div className={classes.dialog + ' ' + classes.active}>
					<NavLink to={path}>{props.name}</NavLink>
				</div>
} 

const Message = (props) => { 

	return <div className={classes.message}>{props.message}</div>
} 

const Dialogs = (props) => {
	return	(
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
				<DialogsItem name="Alex" id="1" />
				<DialogsItem name="Dima" id="2" />
				<DialogsItem name="Roman" id="3" />
				<DialogsItem name="Sveta" id="4" />
				<DialogsItem name="Viktor" id="5" />
			</div>
			
			<div className={classes.messages}>
				<Message message="Hi" />
				<Message message="How are your?" />
				<Message message="Yo" />
				<Message message="Yo" />
				<Message message="Yo" />
			</div>
		</div>

		

		)
} 	

export default Dialogs;