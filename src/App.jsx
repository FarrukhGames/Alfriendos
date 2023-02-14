import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Posts from './components/Posts';
import Messages from './components/Messages';
import Profile from './components/Profile';
import Error from './components/Error';
import {Route, Routes} from 'react-router-dom';

const App = (props) => {
  const numbers = [13, 14, 15, 16, 17];
  const numbers2 = numbers.map((number) => {
    return number * 10;
  });
  console.log(numbers2);
  console.log(props.publications)
  return (
    <>
      <Header/>
      <main className="main">
        <Navigation/>      
        <Routes>
          <Route path="/messages" element={<Messages messages={props.messages}/>}/>
          <Route path="/posts" element={<Posts/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/*" element={<Error/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
