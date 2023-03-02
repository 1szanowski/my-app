import React from "react";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Message/Message";
import { addMessageActionCreator } from "../../redux/dialogs-reducer";
import { updateMessageActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";






const DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage;

  let createAnswer = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  

  let onMessageChange = (text) => {
    
    props.store.dispatch(updateMessageActionCreator(text));
  };
 
  return (
    <Dialogs updateMessage = {onMessageChange}  addMessage = {createAnswer} dialogsPage={state}/>
  )
};
export default DialogsContainer;
