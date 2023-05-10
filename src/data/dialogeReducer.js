const ADD_MESSAGE = "ADD_MESSAGE";
const DELETE_MESSAGE = "DELETE_MESSAGE";
const initialState = {      
    messages: [
        {userName: "Farrukh", message: ": Пляж, это наше всё", id: 1},
        {userName: "Mojang", message: ": Minecraft 1.20.0 скоро выйдет", id: 2},
        {userName: "Roblox", message: ": Мы блокируем игру так как нас взломали :(", id: 3}
    ]
}
const dialogeReducer = (state = initialState, action) => {
    const newState = {...state};
    switch(action.type) {
        case ADD_MESSAGE: 
            const newMessage = { 
                userName: action.userName,
                message: action.message,
                id: Math.random()
            }
            newState.messages = [...newState.messages, newMessage];
            break;
        case DELETE_MESSAGE: 
            newState.messages = newState.messages.filter((report) => {
                return report.id !== action.messageId;
            });
            newState.messages = [...newState.messages];
            break;
        default: 
            console.log("Что то не то :(");
            break;
    }
    return newState;
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