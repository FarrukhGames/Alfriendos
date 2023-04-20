import image from '../images/plage.jpg';
import elonmusk from '../images/elonmusk.png';
import farrukh from '../images/farrukh.png';
import leomessi from '../images/leomessi.png';
import profilimage from '../images/profilimage.png';
import {renderTree} from '../index';
import profileReducer from './profileReducer';
import dialogeReducer from './dialogeReducer';

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
// AC это Action Creator
export default store;