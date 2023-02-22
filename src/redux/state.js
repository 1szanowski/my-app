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
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 4,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callsubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callsubscriber(this._state);
    } else if (action.type === "CREATE-ANSWER") {
      let newMessage = {
        id: 5,
        message: this._state.dialogsPage.newReplyText,
      };
      this._state.dialogsPage.messagesData.push(newMessage);
      this._callsubscriber(this._state);
    } else if (action.type === "UPDATE-ANSWER") {
      this._state.dialogsPage.newReplyText = action.newText;
      this._callsubscriber(this._state);
    }
  },
};

export default store;
window.store = store;
