import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {

	let dialogs = [
		{ id: 1, name: 'Alex' },
		{ id: 2, name: 'Dima' },
		{ id: 3, name: 'Roman' },
		{ id: 4, name: 'Sveta' },
		{ id: 5, name: 'Viktor' }
	]

	let messages = [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'How are your?' },
		{ id: 3, message: 'Yo' },
		{ id: 4, message: 'Yo' },
		{ id: 5, message: 'Yo' }
	]

	let dialogsElements = dialogs.map(d => <DialogsItem name={d.name} id={d.id} />);
	let messagesElements = messages.map(m => <Message message={m.message} />);

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
			{dialogsElements}
			</div>

			<div className={classes.messages}>
			{messagesElements}	
			</div>
		</div>



	)
}

export default Dialogs;