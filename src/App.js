import Header from './components/Header';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="content">
        <Home />
        <Experience />
        <Projects />
        <Skills />
      </div>
    </>
  );
}

export default App;
