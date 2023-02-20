import { Component } from "react";
import classes from "./ProfileInfo.modules.css"


const ProfileInfo = () => {
  return (
  <div>
      <div>
        
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7uG1ZIn2xlTLVtt3anoHZLyTi79PNld35FQ&usqp=CAU"></img>
      </div>

      <div className={classes.descriptionBlock}>
        avatar+ description goes here
        </div>
      
    </div>
  )
};
export default ProfileInfo

