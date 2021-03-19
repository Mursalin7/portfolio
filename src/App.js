import React from "react";
import Header from './components/Header';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Skill from './components/Skill';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <div className='App container my-10 mx-auto max-w-screen-lg bg-black'>
        <Header />
        <main>
          <Hero />
          <Experience />
          <Project />
          <Skill />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
