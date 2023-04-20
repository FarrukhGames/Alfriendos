const ADD_MESSAGE = "ADD_MESSAGE";
const DELETE_MESSAGE = "DELETE_MESSAGE";
const dialogeReducer = (state, action) => {
    switch(action.type) {
        case ADD_MESSAGE: 
            const newMessage = { 
                userName: action.userName,
                message: action.message,
                id: Math.random(),
            }
            state.push(newMessage);
            break;
        case DELETE_MESSAGE: 
            state = state.filter((report) => {
                return report.id !== action.messageId;
            });
            break;
        default: 
            console.log("Что то не то :(");
            break;
    }
    return state;
}
export const addMessageAC = (userName, message) => {
    const action = {
        type: "ADD_MESSAGE",
        userName: userName,
        message: message,
    }
    return action;
}

export const deleteMessageAC = (id) => {
    const action = {
        type: "DELETE_MESSAGE", 
        messageId: id
    }
    return action;
}

export default dialogeReducer;