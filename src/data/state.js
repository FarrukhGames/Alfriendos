import image from '../images/plage.jpg';
import {renderTree} from '../index';

const store = {
    _state: {
        publications: [
            {userName: "Farrukh", text: "Пляж, это наше всё 😃", img: image, id: 1, like: 0},
            {userName: "Leo Messi", text: "I WON THE WORLD CUP!!!" , img: image, id: 2, like: 0},
            {userName: "Elon Musk", text: "Я купил планету земля", img: image, id: 3, like: 0}
        ],
        messages: [
            {userName: "Farrukh", message: ": Пляж, это наше всё 😃", id: 1},
            {userName: "Mojang", message: ": Minecraft 1.20.0 скоро выйдет", id: 2},
            {userName: "Roblox", message: ": Мы блокируем игру так как нас взломали :(", id: 3}
        ],
        friends: [
            {userName: "Farrukh", id: 1},
            {userName: "Leo Messi", id: 2},
            {userName: "Elon Musk", id: 3}
        ],
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        if (action.type === "DELETE_POST") {
            this._state.publications = this._state.publications.filter((post) => {
                return post.id !== action.postId;
            });
            console.log(this._state.publications);
            renderTree();       
        } else if (action.type === "ADD_POST") {
            const newPost = { 
                userName: action.name,
                text: action.text,
                img: action.image,
                id: Math.random(),
                like: 0
            }
            console.log(this)
            this._state.publications.unshift(newPost);
            renderTree();
        } else if (action.type === "ADD_MESSAGE") {
            const newMessage = { 
                userName: action.userName,
                message: action.message,
                id: Math.random(),
            }
            this._state.messages.push(newMessage);
            renderTree();
        } else if (action.type === "DELETE_MESSAGE") {
            this._state.messages = this._state.messages.filter((report) => {
                return report.id !== action.messageId;
            });
            console.log(this._state.messages);
            renderTree();
        } else if (action.type === "ADD_LIKE") {
            const post = this._state.publications.find((element) => {
                return element.id === action.id;
            });
            console.log(post)
            post.like++;
            renderTree();
        }
    },
    addMessage(userName, message) {
        const newMessage = { 
            userName: userName,
            message: message,
            id: Math.random(),
        }
        this._state.messages.push(newMessage);
        renderTree();
    }
}

export default store;