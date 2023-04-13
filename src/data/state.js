import image from '../images/plage.jpg';
import elonmusk from '../images/elonmusk.png';
import farrukh from '../images/farrukh.png';
import leomessi from '../images/leomessi.png';
import profilimage from '../images/profilimage.png';
import {renderTree} from '../index';

const store = {
    _state: {
        profilePage: {
            publications: [
                {userName: "Farrukh", text: "Пляж, это наше всё 😃", img: image, id: 1, like: 0},
                {userName: "Leo Messi", text: "I WON THE WORLD CUP!!!" , img: image, id: 2, like: 0},
                {userName: "Elon Musk", text: "Я купил планету земля", img: image, id: 3, like: 0}
            ],
            friends: [
                {userName: "Farrukh", img: farrukh, id: 1, slug: "farrukh", birthday: "21/06/2011", bio: "Блогер"},
                {userName: "Messi", img: leomessi, id: 2, slug: "messi", birthday: "24/06/1987", bio: "Футболист"},
                {userName: "Elon Musk", img: elonmusk, id: 3, slug: "musk", birthday: "28/06/1971", bio: "Изобретатель"},
                {userName: "User", img: profilimage, id: 4, slug: "user", birthday: "29/08/2006", bio: "Пользователь"}
            ]
        },
        dialogesPage: {        
            messages: [
                {userName: "Farrukh", message: ": Пляж, это наше всё 😃", id: 1},
                {userName: "Mojang", message: ": Minecraft 1.20.0 скоро выйдет", id: 2},
                {userName: "Roblox", message: ": Мы блокируем игру так как нас взломали :(", id: 3}
            ]
        }
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.profilePage.publications = profileReducer(this._state.profilePage.publications, action);
        this._state.dialogesPage.messages = dialogeReducer(this._state.dialogesPage.messages, action);
        renderTree();
    }
}

const profileReducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case "DELETE_POST": 
            state = state.filter((post) => {
                return post.id !== action.postId;
            });  
            break;
        case "ADD_POST": 
            const newPost = { 
                userName: action.userName,
                text: action.text,
                img: action.img,
                id: Math.random(),
                like: 0
            }
            state.unshift(newPost);
            break;
        case "ADD_LIKE": 
            const post = state.find((element) => {
                return element.id === action.id;
            });
            post.like++;
            break;
        default: 
            console.log("Что то не то :(");
            break;
    }
    return state;
}

const dialogeReducer = (state, action) => {
    switch(action.type) {
        case "ADD_MESSAGE": 
            const newMessage = { 
                userName: action.userName,
                message: action.message,
                id: Math.random(),
            }
            state.push(newMessage);
            break;
        case "DELETE_MESSAGE": 
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

// AC это Action Creator
export const deletePostAC = (id) => {
    const action = {
        type: "DELETE_POST", 
        postId: id
    }
    return action;
}

export const addPostAC = (userName, text, img) => {
    const action = {
        type: "ADD_POST", 
        userName: userName,
        text: text,
        img: img
    }
    return action;
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

export const addLikeAC = (id) => {
    const action = {
        type: "ADD_LIKE", 
        id: id
    }
    return action;
}
export default store;