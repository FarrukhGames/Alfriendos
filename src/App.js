import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Posts from './components/Posts';

function App() {
  return (
    <>
      <Header/>
      <main className="main">
        <Navigation/>
        <Posts/>
      </main>
    </>
  );
}

export default App;
