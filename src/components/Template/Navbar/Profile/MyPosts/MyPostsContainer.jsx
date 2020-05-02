import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from 'react-redux';

   /*let like = [
    {id: 1, likesCount: 60}, 
    {id: 2, likesCount: 30}
  ]

  let likeElements = like.map( l => <Like counts={l.likesCount} /> );*/

  const mapStateToProps =  (state) => {
    return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps =  (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;