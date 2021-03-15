import './App.css';

import About from "./components/About"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import Scrollchor from 'react-scrollchor';
import Test from './components/Test'


function App() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#top">NG</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"><i className="fas fa-grip-lines"></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <Scrollchor to="#about" animate={{ duration: 200 }}>
                <li className="nav-item">
                  <a className="nav-link custom-underline" aria-current="page" href="#">
                    about
              </a>
                </li>
              </Scrollchor>
              <Scrollchor to="#skill" animate={{ duration: 100 }}>
                <li className="nav-item">
                  <a className="nav-link custom-underline">
                    skills
              </a>
                </li>
              </Scrollchor>
              <Scrollchor to="#projects" animate={{ duration: 100 }}>
                <li className="nav-item">
                  <a className="nav-link custom-underline" href="#">
                    projects
              </a>
                </li>
              </Scrollchor>
              <Scrollchor to="#contact" animate={{ duration: 100 }}>
                <li className="nav-item">
                  <a className="nav-link custom-underline" href="#">
                    contact
              </a>
                </li>
              </Scrollchor>
            </ul>
          </div>
        </div>
      </nav>
      <section id="about">
        <h1>Hi, I'm Nicolas</h1>
        <About></About>
      </section>
      <section id="skill">
        <h2>Skills</h2>
        <Skills></Skills>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <Projects></Projects>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <Contact></Contact>
      </section>
    </div>
  );
}

export default App;
