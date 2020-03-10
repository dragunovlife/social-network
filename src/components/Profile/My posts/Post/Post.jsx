import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
     <div className={classes.item}>
      <img src="https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg" />
      { props.message }
    </div>
  )
}

export default Post;