import {
	renderEntireTree
} from '../render';

let state = {
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
}

window.state = state;

export let addPost = () => {
	let newPost = {
		id: 5,
		message: state.profilePage.newPostText,
		likesCount: 0
	};
	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText='';
	renderEntireTree(state);
}

export let updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText;
	renderEntireTree(state);
}

window.state = state;

export default state;