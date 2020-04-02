import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Profileimg from './Profileimg/Profileimg';
import Description from './Description/Description';

const Profile = (props) => {

	return (
		<div>

			<Profileimg />
			<Description />
			<MyPosts posts={props.profilePage.posts} 
					 newPostText={props.profilePage.newPostText}
					 updateNewPostText={props.updateNewPostText}
					 addPost={props.addPost} />

		</div>
	)
}

export default Profile;