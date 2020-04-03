let store = {

	_state : {
	profilePage: {
		posts: [{id: 1, message: 'Hi, how are you', likesCount: 12},
				{id: 2, message: 'It\'s my first post', likesCount: 23}
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
		]
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
	getState() {
		return this._state;
	},
	_callSubscriber () {
	console.log('State changed');	
}, 
    addPost () {
	let newPost = {
		id: 5,
		message: this._state.profilePage.newPostText,
		likesCount: 0
	};
	this._state.profilePage.posts.push(newPost);
	this._state.profilePage.newPostText='';
	this._callSubscriber(this._state);
},
	
	updateNewPostText (newText) {
		this._state.profilePage.newPostText = newText;
		this._callSubscriber(this._state);
},	
	subscribe (observer) {
	this._callSubscriber = observer; //патерн observer
}

		}

export default store;
window.store = store;
