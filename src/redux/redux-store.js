import { configureStore } from "@reduxjs/toolkit";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import { combineReducers } from "@reduxjs/toolkit";


const rootReducer = combineReducers ({
    dialogsPage :dialogsReducer,
    profilePage : profileReducer,
})
const store = configureStore ({reducer : rootReducer});

export default store;