import image from '../images/plage.jpg';
export const publications = [
    {userName: "Farrukh", text: "Пляж, это наше всё 😃", img: image, id: 1},
    {userName: "Leo Messi", text: "I WON THE WORLD CUP!!!" , img: image, id: 2},
    {userName: "Elon Musk", text: "Я купил планету земля", img: image, id: 3}
];
export const messages = [
  {userName: "Farrukh", message: ": Пляж, это наше всё 😃", id: 1},
  {userName: "Mojang", message: ": Minecraft 1.20.0 скоро выйдет", id: 2},
  {userName: "Roblox", message: ": Мы блокируем игру так как нас взломали :(", id: 3}
];

const addPost = (userName, text) => {
    const newPost = { 
        userName: userName,
        text: text,
        img: image,
        id: 4
    }
    publications.push(newPost);
}

addPost("lq^plsdzq", "okaqjsd qojsd ojzqisd zjq");

const addMessage = (userName, text) => {
    const newMessage = { 
        userName: userName,
        text: text,
        id: 4
    }
    messages.push(newMessage);
}

addMessage("kfdkdk", "jhi upiqsh fdqjuq hhuoç sqfjuih qijuhc uh");