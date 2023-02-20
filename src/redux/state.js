import { rerenderEntireTree } from "../render";

let state = {
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
    dialogsData: [
      { id: 1, name: "Alex" },
      { id: 2, name: "Zero" },
      { id: 3, name: "Vader" },
      { id: 4, name: "Skywalker" },
    ],
  },
};
window.state = state;

export let addPost = () => {
  let newPost = {
    id: 4,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.postData.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};



export default state;
