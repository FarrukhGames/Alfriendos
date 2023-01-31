import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Posts from './components/Posts';
import Messages from './components/Messages';
import Profile from './components/Profile';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <main className="main">
        <Navigation/>      
        <Routes>
          <Route path="/messages" element={<Messages/>}/>
          <Route path="/posts" element={<Posts/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/*" element={<h1>error 404</h1>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
