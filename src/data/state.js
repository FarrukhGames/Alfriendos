import image from '../images/plage.jpg';
import {renderTree} from '../index';

const store = {
    state: {
        publications: [
            {userName: "Farrukh", text: "Пляж, это наше всё 😃", img: image, id: 1, like: 0},
            {userName: "Leo Messi", text: "I WON THE WORLD CUP!!!" , img: image, id: 2, like: 0},
            {userName: "Elon Musk", text: "Я купил планету земля", img: image, id: 3, like: 0}
        ],
        messages: [
            {userName: "Farrukh", message: ": Пляж, это наше всё 😃", id: 1},
            {userName: "Mojang", message: ": Minecraft 1.20.0 скоро выйдет", id: 2},
            {userName: "Roblox", message: ": Мы блокируем игру так как нас взломали :(", id: 3}
        ]
    },
    addPost(userName, text) {
        const newPost = { 
            userName: userName,
            text: text,
            img: image,
            id: Math.random(),
            like: 0
        }
        console.log(this)
        this.state.publications.unshift(newPost);
        renderTree();
    },
    addMessage(userName, message) {
        const newMessage = { 
            userName: userName,
            message: message,
            id: Math.random(),
        }
        this.state.messages.push(newMessage);
        renderTree();
    },
    deletePost(postId) {
        this.state.publications = this.state.publications.filter((post) => {
            return post.id !== postId;
        });
        console.log(this.state.publications);
        renderTree();
    },
    deleteMessage(messageId) {
        this.state.messages = this.state.messages.filter((report) => {
            return report.id !== messageId;
        });
        console.log(this.state.messages);
        renderTree();
    },
    addLikes(id) {
        const post = this.state.publications.find((element) => {
            return element.id === id;
        });
        console.log(post)
        post.like++;
        renderTree();
    }
}

export default store;