import { Component } from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div className={classes.item}>
        <img src="https://www.meme-arsenal.com/memes/e349a73033ca4f199e946a06d3fb4a02.jpg"></img>
        {props.message}
      </div>
      <div>
        <span>Like: {props.likes}</span>
      </div>
    </div>
  );
};
export default Post;
