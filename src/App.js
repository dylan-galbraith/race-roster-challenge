import './App.scss';
import Book from './components/Book';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Featured />
      <Book />
      <Footer />
    </div>
  );
}

export default App;
