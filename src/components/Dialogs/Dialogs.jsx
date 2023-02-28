import React from "react";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Message/Message";
import { addMessageActionCreator } from "../../redux/dialogs-reducer";
import { updateMessageActionCreator } from "../../redux/dialogs-reducer";

let newReply = React.createRef();

/* create ref to form */

const Message = (props) => {
  return <div className={classes.dialog}>{props.message}</div>;
};




const Dialogs = (props) => {

  let createAnswer = () => {
    props.dispatch(addMessageActionCreator());
  };

  let dialogsElements = props.state.dialogsData.map((dialog) => ( 
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.state.messagesData.map((message) => (
    <Message message={message.message} id={message.id} />
  ));

  let onMessageChange = () => {
    let text = newReply.current.value;
    props.dispatch(updateMessageActionCreator(text));
  };
 
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        {messagesElements}
        <div>
          <textarea placeholder="Enter your message"
            onChange={onMessageChange}
            ref={newReply}
            value={props.state.newReplyText}
          />
          <div>
            <button onClick={createAnswer}>Answer</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
