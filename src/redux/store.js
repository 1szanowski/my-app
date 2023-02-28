import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";



let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: "Love 2 code!", likesCount: 1020 },
        { id: 2, message: "First post!", likesCount: 34 },
        { id: 3, message: "Lets go surfing!", likesCount: 130 },
      ],
      newPostText: "Alexxxx",
    },

    dialogsPage: {
      messagesData: [
        { id: 1, message: "Hi!" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Welcome!" },
        { id: 4, message: "You can do it!" },
      ],
      newReplyText: "magic",
      dialogsData: [
        { id: 1, name: "Alex" },
        { id: 2, name: "Zero" },
        { id: 3, name: "Vader" },
        { id: 4, name: "Skywalker" },
      ],
    },
  },
  _callsubscriber() {
    console.log("render!!");
  },
  subscribe(observer) {
    this._callsubscriber = observer;
  },
  getState() {
    return this._state;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action); //reducer return new info assign

    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action); //same
    this._callsubscriber(this._state);
  },
};





export default store;
window.store = store;
