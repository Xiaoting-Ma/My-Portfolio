import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experiences from './components/Experiences';
import Cursor from './components/CustomCursor';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  return (
    <div>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <About />
      <Skills />
      <Projects />
      <Experiences />
      <Contact />
      <Cursor />
    </div>
  );
}

export default App;
