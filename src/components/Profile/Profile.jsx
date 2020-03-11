import React from 'react';
import classes from './Profile.module.css';
import Myposts from './My posts/Myposts';
import Frontimg from './Frontimg/Frontimg';

const Profile = () => {
  return (
    <div>
      
      <Frontimg />

      <div>
        ava+description
     </div>

      <Myposts />

    </div>
  )
}

export default Profile;