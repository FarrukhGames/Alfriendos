import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter}  from 'react-router-dom';
import image from './images/plage.jpg';

const messages = [
  {userName: "Farrukh", message: ": Пляж, это наше всё 😃", id: 1},
  {userName: "Mojang", message: ": Minecraft 1.20.0 скоро выйдет", id: 2},
  {userName: "Roblox", message: ": Мы блокируем игру так как нас взломали :(", id: 3}
];

const publications = [
    {userName: "Farrukh", text: "Пляж, это наше всё 😃", img: image, id: 1},
    {userName: "Leo Messi", text: "I WON THE WORLD CUP!!!" , img: image, id: 2},
    {userName: "Elon Musk", text: "Я купил планету земля", img: image, id: 3}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App messages={messages} publications={publications}/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
