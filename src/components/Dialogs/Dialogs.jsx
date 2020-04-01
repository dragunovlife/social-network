import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {

	let dialogsElements = props.state.dialogs.map(d => <DialogsItem name={d.name} id={d.id} />);
	let messagesElements = props.state.messages.map(m => <Message message={m.message} />);
	
	let newMessageElement = React.createRef ();
	
	let addMessage = () => {
		let text = newMessageElement.current.value;
		alert(text)
	} 

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
			{dialogsElements}

			<img src ="data:image/jpeg;base64,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" />
			<img src ="data:image/jpeg;base64,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" />
			<img src ="data:image/jpeg;base64,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" />

			</div>

			<div className={classes.messages}>
			{messagesElements}	
			</div>

			<div>
			<textarea ref={newMessageElement}></textarea>
			</div>

			<div>
			<button onClick={addMessage}>Add Message</button>
			</div>
		</div>



	)
}

export default Dialogs;