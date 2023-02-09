import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Posts from './components/Posts';
import Messages from './components/Messages';
import Profile from './components/Profile';
import Error from './components/Error';
import {Route, Routes} from 'react-router-dom';

const App = (props) => {
  const numbers = [1, 2, 3, 4, 5];
  // let numbers2 = [];
  // numbers.forEach((number ,i) => {
  //   // numbers2[i] = number + 1;
  //   numbers2.push(number * 2)
  // });
  const numbers2 = numbers.map((number) => {
    return number * 2;
  }); 
  numbers2.push(651);
  numbers2.push(845);
  const numbers3 = numbers2;
  // console.log(numbers3, numbers2);
  return (
    <>
      <Header/>
      <main className="main">
        <Navigation/>      
        <Routes>
          <Route path="/messages" element={<Messages messages={props.messages}/>}/>
          <Route path="/posts" element={<Posts publications={props.publications}/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/*" element={<Error/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
