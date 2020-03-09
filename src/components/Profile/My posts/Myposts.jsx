import React from 'react';
import classes from './Myposts.module.css';
import Post from './Post/Post';
const Myposts = () => {
  return (
    <div>
      My posts
    <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
    </div>
      <div className={classes.posts}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>)
}

export default Myposts;