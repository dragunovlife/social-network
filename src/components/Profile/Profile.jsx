import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Profileimg from './Profileimg/Profileimg';
import Description from './Description/Description';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {

	return (
		<div>

			<Profileimg />
			<Description />
			<MyPostsContainer store={props.store} />

		</div>
	)
}

export default Profile;