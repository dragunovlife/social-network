import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {

	_state: {
		profilePage: {
			posts: [{
					id: 1,
					message: 'Hi, how are you',
					likesCount: 12
				},
				{
					id: 2,
					message: 'It\'s my first post',
					likesCount: 23
				}
			],
			newPostText: 'it-kamasutra.com'
		},

		dialogsPage: {
			dialogs: [{
					id: 1,
					name: 'Alex'
				},
				{
					id: 2,
					name: 'Dima'
				},
				{
					id: 3,
					name: 'Roman'
				},
				{
					id: 4,
					name: 'Sveta'
				},
				{
					id: 5,
					name: 'Viktor'
				}
			],
			messages: [{
					id: 1,
					message: 'Hi'
				},
				{
					id: 2,
					message: 'How are your?'
				},
				{
					id: 3,
					message: 'Yo'
				},
				{
					id: 4,
					message: 'Yo'
				},
				{
					id: 5,
					message: 'Yo'
				}
			],
			newMessageBody: ''
		},

		sidebar: [{
				id: 3,
				name: 'Roman'
			},
			{
				id: 4,
				name: 'Sveta'
			},
			{
				id: 5,
				name: 'Viktor'
			}
		]
	},
	_callSubscriber() {
		console.log('State changed');
	},



	getState() {
		return this._state;
	},

	subscribe(observer) {
		this._callSubscriber = observer; //патерн observer
	},

	dispatch(action) { // { type: 'ADD-POST'}
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);

		this._callSubscriber(this._state);
	}
}

export default store;
window.store = store;
// store - OOP