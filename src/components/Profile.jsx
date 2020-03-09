import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
  return <div className={classes.content}>
    <div>
      <img src="https://avatars.mds.yandex.net/get-pdb/1736242/a7f9c41c-4eb1-4870-8711-0e241ffed085/s1200" />
    </div>

    <div>
      ava+description
  </div>

    <div>
      My posts
    <div>
        New post
    </div>
      <div className={classes.posts}>
        <div className={classes.item}>
          post 1
      </div>
        <div className={classes.item}>
          post 2
      </div>
      </div>
    </div>

  </div>

}

export default Profile;