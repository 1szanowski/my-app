import "./App.css";
import { Component } from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { addPost } from "./redux/state";

const App = (props) => {
  
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/dialogs/*"
            element={<Dialogs state={props.state.dialogsPage} dispatch ={props.dispatch} newReplyText ={props.state.dialogsPage.newReplyText} />}
          />

          <Route
            path="/profile"
            element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />}
          />

          <Route path="/music" element={<Music />} />
          <Route path="/News" element={<News />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
