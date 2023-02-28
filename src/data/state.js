import image from '../images/plage.jpg';
import {renderTree} from '../index';

const state = {
    publications: [
        {userName: "Farrukh", text: "Пляж, это наше всё 😃", img: image, id: 1},
        {userName: "Leo Messi", text: "I WON THE WORLD CUP!!!" , img: image, id: 2},
        {userName: "Elon Musk", text: "Я купил планету земля", img: image, id: 3}
    ],
    messages: [
        {userName: "Farrukh", message: ": Пляж, это наше всё 😃", id: 1},
        {userName: "Mojang", message: ": Minecraft 1.20.0 скоро выйдет", id: 2},
        {userName: "Roblox", message: ": Мы блокируем игру так как нас взломали :(", id: 3}
    ]
}

export const addPost = (userName, text) => {
    const newPost = { 
        userName: userName,
        text: text,
        img: image,
        id: Math.random()
    }
    state.publications.unshift(newPost);
    renderTree();
}

export const deletePost = (postId) => {
    // const postToDelete = state.publications.findIndex((post) => {
    //     return post.id == postId;
    // });
    // console.log(postToDelete);
    // state.publications[postToDelete] = "";
    state.publications = state.publications.filter((post) => {
        return post.id != postId;
    });
    console.log(state.publications)
    renderTree();
}

export const addMessage = (userName, message) => {
    const newMessage = { 
        userName: userName,
        message: message,
        id: Math.random()
    }
    state.messages.push(newMessage);
    renderTree();
}

export default state;