import './App.css';
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
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
      </div>
  );
}

export default App;
