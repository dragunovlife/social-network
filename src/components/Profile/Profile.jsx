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
			<MyPosts />

		</div>
	)
}

export default Profile;