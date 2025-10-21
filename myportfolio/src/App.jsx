import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import About from './components/About';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';


function App() {

  return (
    <div className='main'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </div>
  )
}

export default App
