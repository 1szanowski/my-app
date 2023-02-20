import React from "react";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Message/Message";





let newReply = React.createRef() /* create ref to form */
let createAnswer = () => {
  let text = newReply.current.value;
  alert (text);
}



const Message = (props) => {
  return <div className={classes.dialog}>{props.message}</div>;
};

let Dialogs = (props) => {
  
  

  let dialogsElements = props.state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.state.messagesData.map((message) => (
    <Message message={message.message} id={message.id} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}</div> 
      <div className={classes.messages}>
        {messagesElements}
        <div>
         <textarea ref = {newReply}></textarea>
         <div>
          <button onClick={createAnswer}>Answer</button>
         </div>
        </div>
        </div>
        
    </div>
  );
};
export default Dialogs;
