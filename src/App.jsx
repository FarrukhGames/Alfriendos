import {useState, useEffect} from "react";
import {createPortal} from "react-dom";
import {Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Posts from './components/Posts';
import Messages from './components/Messages';
import Profile from './components/Profile';
import Error from './components/Error';
import FindFriends from './components/FindFriends';
import Counter from './components/Counter';
import Gallery from './components/Gallery';
import FriendPage from './components/FriendPage';
// import {useSelector} from 'react-redux';
import Auth from './components/Auth';
import ProfileInfo from "./components/ProfileInfo";
import Modal from "./components/Modal/Modal";
import './App.css';

const App = (props) => {
  // const numbers = [13, 14, 15, 16, 17];
  // const numbers2 = numbers.map((number) => {
    //   return number * 10;
    // });
    // const state = useSelector((state) => {
      //   return state
      // }); 
      // console.log(state);
  const [isLogged, setIsLogged] = useState(false);
  const [isModalShown, setIsModalShown] = useState(false);
  const isLoggedInfo = localStorage.getItem("logged");
  useEffect(() => {
    console.log("effect");
    if (isLoggedInfo === "1") {
      setIsLogged(true);
    }
  }, []);
  console.log(isLoggedInfo);
  const loginHandler = (event) => {
    event.preventDefault();
    setIsLogged(true);
    localStorage.setItem("logged", "1");
  }
  const logoutHandler = () => {
    setIsLogged(false);
    localStorage.removeItem("logged");
  }
  const showModal = () => {
    setIsModalShown(true);
  }
  const hideModal = () => {
    setIsModalShown(false);
  }
  return (
    <>
      <Header/>
      <main className="main">
        <Navigation isAuthenticated={isLogged} logoutFunction={logoutHandler} showModalFunction={showModal}/>      
        <Routes>
          <Route path="/messages" element={<Messages messages={props.messages}/>}/>
          <Route path="/posts" element={<Posts/>}/>
          <Route path="/" element={<Profile/>}/>
          <Route path="/findFriends" element={<FindFriends/>}/>
          <Route path="/counter" element={<Counter/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/:friendPage" element={<FriendPage/>}/>
          <Route path="/profile" element={<ProfileInfo/>}/>
          <Route path="/*" element={<Error/>}/>
        </Routes>
        {/* {!isLogged && <Auth loginFunction={loginHandler}/>} */}
        {isModalShown && <Modal hideModalFunction={hideModal}><Auth loginFunction={loginHandler}/></Modal>}
      </main>
    </>
  );
}

export default App;
