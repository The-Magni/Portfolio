import './App.css';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';
import Work from './components/Work/Work';
import ScrollAnimation from './components/ScrollAnimation/ScrollAnimation';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Projects />
      <Work />
      <ContactMe />
    </div>
  );
}

export default App;
