import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SkillsComponent from './components/Skills';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
    <Header />
    <main>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  </div>
  );
}

export default App;
