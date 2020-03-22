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


		let dialogsData = [
			{id: 1, name: 'Alex'}, 
			{id: 2, name: 'Dima'},
			{id: 3, name: 'Roman'}, 
			{id: 4, name: 'Sveta'},
			{id: 5, name: 'Viktor'}
		]

		let messagesData = [
			{id: 1, message: 'Hi'}, 
			{id: 2, message: 'How are your?'},
			{id: 3, message: 'Yo'}, 
			{id: 4, message: 'Yo'},
			{id: 5, message: 'Yo'}
		]
				
	return	(
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
				<DialogsItem name={dialogsData[0].name} id={dialogsData[0].id} />
				<DialogsItem name={dialogsData[1].name} id={dialogsData[1].id} />
				<DialogsItem name={dialogsData[2].name} id={dialogsData[2].id} />
				<DialogsItem name={dialogsData[3].name} id={dialogsData[3].id} />
				<DialogsItem name={dialogsData[4].name} id={dialogsData[4].id} />
			</div>
			
			<div className={classes.messages}>
				<Message message={messagesData[0].message} />
				<Message message={messagesData[1].message} />
				<Message message={messagesData[2].message} />
				<Message message={messagesData[3].message} />
				<Message message={messagesData[4].message} />
			</div>
		</div>

		

		)
} 	

export default Dialogs;