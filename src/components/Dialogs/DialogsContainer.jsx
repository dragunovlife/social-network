import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import Dialogs from '../Dialogs/Dialogs';

const DialogsContainer = (props) => {

	let state = props.store.getState().dialogsPage;

	let onSendMessageClick = () => {
		props.store.dispatch(sendMessageCreator());
	}

	let onNewMessageChange = (body) => {
		props.store.dispatch(updateNewMessageBodyCreator(body));	
	}

	return (
		<Dialogs updateNewMessageBody={onNewMessageChange} 
				 sendMessage={onSendMessageClick} dialogsPage={state} />
		
	)
}

export default DialogsContainer;