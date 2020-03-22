import React from 'react';
import classes from './Myposts.module.css';
import Post from './Post/Post';
import Like from './Post/Like/Like';
const Myposts = () => {
  
    let postData = [
      {id: 1, message: 'Hi, how are you'}, 
      {id: 2, message: 'It\'s my first post'}
    ]

    let likeData = [
      {id: 1, likesCount: 60}, 
      {id: 2, likesCount: 30}
    ]
      
  return (
    <div className={classes.myposts}>
      <h2>My posts</h2>
    <div>
        <div>
          <textarea className={classes.textarea}></textarea>
        </div>

        <div>
        <button>Add post</button>
        <button>Remove</button>
        </div>
    </div>
    <div className={classes.posts}>
        <Post message={postData[0].message} />
        <Like counts={likeData[0].likesCount} />
        <Post message={postData[1].message} />
        <Like counts={likeData[1].likesCount} />
      </div>
    </div>)
}

export default Myposts;