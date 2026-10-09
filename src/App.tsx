import { useEffect } from 'react';
import './App.css'
import './styles/index.css'
import Header from './components/Header'
import Hero from './components/Hero';
import lazyLoading from './utils/lazyLoading';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    lazyLoading();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
