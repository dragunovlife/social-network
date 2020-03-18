import React from 'react';
import classes from './Profile.module.css';
import Myposts from './My posts/Myposts';
import Profileimg from './Profileimg/Profileimg';
import Description from './Description/Description';

const Profile = () => {
  return (
    <div>
      
      <Profileimg />
      <Description />

      <Myposts />

    </div>
  )
}

export default Profile;