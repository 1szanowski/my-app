import "./App.css";
import { Component } from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { addPost } from "./redux/store";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
  
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/dialogs/*"
            element={<DialogsContainer store={props.store} />}
          />

          <Route
            path="/profile"
            element={<Profile store = {props.store} />}
          />

          <Route path="/music" element={<Music />} />
          <Route path="/News" element={<News />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Users" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
