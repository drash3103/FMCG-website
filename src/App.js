import React, { useEffect } from 'react';
import './components/Login';
import './App.css';
import Products from './components/Products';
import Service from './components/Service';
import Parallax from './components/Parallax';
import Header from './components/Header';
import About from './components/About';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

const App = () => {
  useEffect(() => {
    const leftImage = document.getElementById("Left");
    const sbagImage = document.getElementById("sbag");
    const rightImage = document.getElementById("Right");

    const handleScroll = () => {
      const scrollY = window.scrollY;
      leftImage.style.left = `${-scrollY / 3}px`;
      sbagImage.style.top = `${-scrollY / 2}px`;
      // const rotationAngle = -scrollY / 5; 
      // sbagImage.style.transform = `rotate(${rotationAngle}deg)`;    
      rightImage.style.right = `${-scrollY / 4}px`;
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <div>
      <Router>
      <Header/>
      <Routes> 
                <Route path="/home" element={<Parallax/>}></Route>
                <Route path='/about' element={< About />}></Route> 
                <Route path='/products' element={< Products />}></Route> 
                <Route path='/service' element={< Service />}></Route> 
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/signup' element={<SignUp/>}></Route>
        </Routes> 
      </Router>
      {/* <section id="products">
        <Products/>
      </section> */}
      {/* <Parallax/> */}
      {/* <About/>
      <Products/>
      <Service/>     */}
 {/* <section className='Footer'>
    <div class="block1"><h1>Taneesk</h1></div>
    <div class="block2"><h1>Drashti</h1></div>
    <div class="block3"><h1>Shamik</h1></div>
    <div class="block4"><h1>Khushi</h1></div>
    <div class="block5"><h1>Het</h1></div>
 </section> */}
    </div>
  );
}

export default App;
