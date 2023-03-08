const CREATE_ANSWER = "CREATE-ANSWER";
const UPDATE_ANSWER = "UPDATE-ANSWER";

let InitialState = {
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
};
///// new version /////
const dialogsReducer = (state = InitialState, action) => {
  switch (action.type) {
    
    case CREATE_ANSWER:
      let newMessage = state.newReplyText;
      return {
        ...state,
        newReplyText: "",
        messagesData: [...state.messagesData, { id: 5, message: newMessage }],
      };
      

    case UPDATE_ANSWER: {
      return { ...state, newReplyText: action.newText };

      
    }
    default:
      return state;
  }

  /*    */
};
export let addMessageActionCreator = () => ({ type: "CREATE-ANSWER" });

export let updateMessageActionCreator = (text) => ({
  type: "UPDATE-ANSWER",
  newText: text,
});
export default dialogsReducer;
//we delete this cause we put in reducer only nessesary piece of state
