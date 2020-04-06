import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'

const MyPostsContainer = (props) => {

 let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let onPostChange = (text) => {
    
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  }

  /*let like = [
    {id: 1, likesCount: 60}, 
    {id: 2, likesCount: 30}
  ]

  let likeElements = like.map( l => <Like counts={l.likesCount} /> );*/

  return (
      <MyPosts updateNewPostText={onPostChange} addPost={addPost} 
               posts={state.profilePage.posts} 
               newPostText={state.profilePage.newPostText} />
         )
}

export default MyPostsContainer;





