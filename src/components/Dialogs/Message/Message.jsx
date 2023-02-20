import { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from "./../Dialogs.module.css";

const Messages = (props) => {
  return <div className={classes.dialog}>{props.message}</div>;
};


export default Messages;
