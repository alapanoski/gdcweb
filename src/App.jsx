import { useState, useEffect, useRef } from 'react';
import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Events from './components/Events/Events';
import Scrollbanner from './components/Scrollbanner/Scrollbanner';


function App() {
  return (
    <div className="">
      <Navbar />
      <Landing />
      {/* <Scrollbanner ref={secondComponentRef} isFixed={isFixed}/> */}
      <Scrollbanner />

      <Events />
     
      <Events />
    </div>
  );
}

export default App;
