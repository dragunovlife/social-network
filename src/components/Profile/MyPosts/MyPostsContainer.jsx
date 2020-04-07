import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {

   /*let like = [
    {id: 1, likesCount: 60}, 
    {id: 2, likesCount: 30}
  ]

  let likeElements = like.map( l => <Like counts={l.likesCount} /> );*/

  return (
    <StoreContext.Consumer>
    {
      (store) => {
        let state = store.getState();
        let addPost = () => {
          store.dispatch(addPostActionCreator());
        }

        let onPostChange = (text) => {
          let action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
        }

        return <MyPosts updateNewPostText={onPostChange}
        addPost={addPost}
        posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText}/>
      }
    }
    </StoreContext.Consumer>
    )
}

export default MyPostsContainer;