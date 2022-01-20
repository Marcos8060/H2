import './App.css';
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Register from './components/Register';
import Services from './components/Services';
import Vip from './components/Vip';

function App() {
  return (
      <div>
        <Header />
        <Hero />
        <About />
        <Services />
        <Vip />
        <Register />
      </div>
  );
}

export default App;
