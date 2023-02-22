
import React from 'react';
import Work from './components/Work';
import Home from './components/Home';
import Skills from './components/Skills';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import SocialLinks from './components/SocialLinks';
import Skills2 from './components/Skills2';
import Contact from './components/Contact';



function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <Skills/>
      <Skills2/>
      <Work/>
      <Portfolio/>
      
      
      <Contact/>

      <SocialLinks/>
    </div>
  );
}

export default App;
