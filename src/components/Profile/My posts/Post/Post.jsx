import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
     <div className={classes.item}>
      <img src="https://avatars.mds.yandex.net/get-zen_doc/1945572/pub_5ddae3e3d7657134590e3492_5ddae4363112ab60c7357ea5/scale_1200" />
      { props.message } 
      <div>
      <span>like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;