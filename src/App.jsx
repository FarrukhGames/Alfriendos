import './App.css';
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
import {Route, Routes} from 'react-router-dom';
// import {useSelector} from 'react-redux';
import Auth from './components/Auth';
import ProfileInfo from "./components/ProfileInfo";
import {useState} from "react";

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
  const loginHandler = (event) => {
    event.preventDefault();
    setIsLogged(true);
  }
  const logoutHandler = () => {
    setIsLogged(false)
  }
  return (
    <>
      <Header/>
      <main className="main">
        <Navigation isAuthenticated={isLogged} logoutFunction={logoutHandler}/>      
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
        {!isLogged && <Auth loginFunction={loginHandler}/>}
      </main>
    </>
  );
}

export default App;
