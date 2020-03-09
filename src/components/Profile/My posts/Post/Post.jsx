import React from 'react';
import classes from './Post.module.css';

const Post = () => {
  return (
    <div className={classes.item}>
      <img src="https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg" />
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
  )
}

export default Post;