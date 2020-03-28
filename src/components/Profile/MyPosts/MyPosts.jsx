import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import Like from './Post/Like/Like';

const MyPosts = (props) => {

  let postsElements = 
  props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  /*let like = [
    {id: 1, likesCount: 60}, 
    {id: 2, likesCount: 30}
  ]

  let likeElements = like.map( l => <Like counts={l.likesCount} /> );*/

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
        { postsElements }
       {/* { likeElements }*/}  
       
      </div>
      }
    </div>)
}

export default MyPosts;





