import React from 'react';
import classes from './Myposts.module.css';
import Post from './Post/Post';
import Like from './Post/Like/Like';
const Myposts = () => {
  return (
    <div className={classes.myposts}>
      <h3>My posts</h3>
    <div>
        <div>
          <textarea></textarea>
        </div>

        <div>
        <button>Add post</button>
        <button>Remove</button>
        </div>
    </div>
    <div className={classes.posts}>
        <Post message='Hi, how are you' counts="30" />
        <Like counts="60" />
        <Post message="It's my first post" />
        <Like counts="30" />
      </div>
    </div>)
}

export default Myposts;