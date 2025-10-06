import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background3D from './components/Background3D';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') !== 'false';
    setDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', String(newMode));
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="relative">
        <div className="fixed inset-0 -z-10">
          <div className={`absolute inset-0 ${darkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
            {/* Softer, reduced glows */}
            <div className="absolute -top-20 left-1/4 w-[20rem] h-[20rem] bg-brand-500/10 rounded-full blur-2xl" />
            <div className="absolute bottom-1/4 right-1/4 w-[18rem] h-[18rem] bg-accent-600/10 rounded-full blur-2xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[22rem] h-[22rem] bg-brand-400/10 rounded-full blur-2xl" />
          </div>
        </div>

        <Background3D darkMode={darkMode} />

        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Education darkMode={darkMode} />
        <Achievements darkMode={darkMode} />
        <Certifications darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Contact darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
