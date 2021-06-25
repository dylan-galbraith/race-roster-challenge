import './App.scss';
import Book from './components/Book';
import Featured from './components/Featured';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Featured />
      <Book />
    </div>
  );
}

export default App;
