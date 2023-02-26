const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const CREATE_ANSWER = "CREATE-ANSWER";
const UPDATE_ANSWER = "UPDATE-ANSWER"



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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 4,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callsubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callsubscriber(this._state);
    } 
    else if (action.type === CREATE_ANSWER) {
      let newMessage = {
        id: 5,
        message: this._state.dialogsPage.newReplyText,
      };
      this._state.dialogsPage.messagesData.push(newMessage);
      this._state.dialogsPage.newReplyText =("")
      this._callsubscriber(this._state);
    } 
    else if (action.type === UPDATE_ANSWER) {
      this._state.dialogsPage.newReplyText = action.newText;
      this._callsubscriber(this._state);
    }
  },
};


export let addPostActionCreator = () =>  ({type: "ADD-POST"});
  


export let updateNewPostTextActionCreator = (text) => ({type: "UPDATE-NEW-POST-TEXT", newText: text});

export let addMessageActionCreator = () => ({type: "CREATE-ANSWER"});

export let updateMessageActionCreator = (text) => ({ type: "UPDATE-ANSWER", newText: text });

export default store;
window.store = store;
