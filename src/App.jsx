import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Training from "./components/Training";
import Technologies from './components/Technologies';
import Projects from "./components/Projects";
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={`flex flex-col min-h-screen relative overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 ${isDarkMode ? 'dark' : ''}`}>
      <div className={`absolute top-0 left-0 z-[-2] h-full w-full ${isDarkMode ? 'bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' : 'bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'}`}></div>
      <div className="fixed top-0 left-0 -z-10 h-full w-full"></div>
      <div className="container mx-auto px-8 flex-grow"> 
        <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <Hero />
        <About />
        <Education />
        <Training />
        <Technologies />
        <Projects />
        <Hobbies />
        <Contact />
      </div>
      <Footer /> 
    </div>
  );
}
