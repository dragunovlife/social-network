import React from 'react';
import classes from './Profile.module.css';
import Profileimg from './Profileimg/Profileimg';
import Description from './Description/Description';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = () => {

	return (
		<div>
		<Profileimg />
		<Description />
		<MyPostsContainer />
		</div>
		)
}

export default Profile;