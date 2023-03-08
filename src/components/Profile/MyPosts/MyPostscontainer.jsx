import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { addPostActionCreator } from "../../../redux/profile-reducer";
import { updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

// const MyPostsContainer = (props) => {
    
//     let state = props.store.getState();

//   let addPost = () => {
//     props.store.dispatch(addPostActionCreator());
//   };

//   let onPostChange = (text) => {
//     let action = updateNewPostTextActionCreator(text);
//     props.store.dispatch(action);
//   };

//   return <MyPosts updateNewPostText={onPostChange} addPost={addPost} postData = {state.profilePage.postData} newPostText = {state.profilePage.newPostText}/>;
// };

const mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }
};


const mapDispatchToProps =(dispatch) => {
  return {
  updateNewPostText: (text) => {let action = updateNewPostTextActionCreator(text);
    dispatch(action);},
  addPost :  () => {dispatch(addPostActionCreator())}
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
