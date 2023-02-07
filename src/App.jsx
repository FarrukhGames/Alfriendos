import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Posts from './components/Posts';
import Messages from './components/Messages';
import Profile from './components/Profile';
import Error from './components/Error';
import {Route, Routes} from 'react-router-dom';

const App = () => {
  let numbers = [1, 2, 3, 4, 5];
  // let numbers2 = [];
  // numbers.forEach((number ,i) => {
  //   // numbers2[i] = number + 1;
  //   numbers2.push(number * 2)
  // });
  let numbers2 = numbers.map((number) => {
    return number * 2;
  }); 
  console.log(numbers2);
  return (
    <>
      <Header/>
      <main className="main">
        <Navigation/>      
        <Routes>
          <Route path="/messages" element={<Messages/>}/>
          <Route path="/posts" element={<Posts/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/*" element={<Error/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
