import React from "react";
import { Component } from "react";
import classes from "../MyPosts/MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator } from "../../../redux/profile-reducer";
import { updateNewPostTextActionCreator } from "../../../redux/profile-reducer";

const MyPosts = (props) => {
  let postsElements = props.postData.map((el) => (
    <Post message={el.message} key ={el.id} likes={el.likesCount} />
  ));

  let newPostElement = React.createRef(); /*create link to textarea*/

  let onAddPost = () => {
    props.addPost();
    
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;

    props.updateNewPostText(text);
  };

  return (
    <div className={classes.postsBlock}>
      <h3> My posts</h3>
      <div>
        <div>
          <textarea
            placeholder="talk to Matrix.."
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add Post</button>
        </div>
      </div>
      <div>New posts</div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};
export default MyPosts;
