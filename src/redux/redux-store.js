import { configureStore } from "@reduxjs/toolkit";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import { combineReducers } from "@reduxjs/toolkit";


const rootReducer = combineReducers ({
    dialogsPage :dialogsReducer,
    profilePage : profileReducer,
    usersPage: usersReducer,
})
const store = configureStore ({reducer : rootReducer});
window.store = store;

export default store;