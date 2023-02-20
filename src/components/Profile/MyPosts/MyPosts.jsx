import React from "react"
import { Component } from "react";
import classes from "../MyPosts/MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.postData.map((el) => (
    <Post message={el.message} likes={el.likesCount} />
  ));

let newPostElement = React.createRef() /*create link to textarea*/ 


  let addPost = () => {
   
     /*get values from textarea*/
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
          <textarea onChange={onPostChange}  ref={newPostElement} value ={props.value}/> 
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div>New posts</div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};
export default MyPosts;
