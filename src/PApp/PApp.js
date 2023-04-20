import {FaBars, FaTimes} from 'react-icons/fa';
import React from 'react';
import Layout from "./Layout";
import { useRef } from 'react';
import "./PApp.css";
  
function PApp(){
    const navRef=useRef();
    const showNavbar=()=>{
      navRef.current.classList.toggle('responsive_nav');
    }
    const closeNavbar=()=>{
      navRef.current.classList.remove('responsive_nav');
    }
    return (
      <>
      <header>
       <nav align="center" ref={navRef}>
       <a href='#Home' onClick={showNavbar}>Home</a>
       <a href='#About' onClick={showNavbar}>About</a>
       <a href='#Projects' onClick={showNavbar}>Projects</a>
       <a href='#Contact' onClick={showNavbar}>Contact</a>
       <a href='#Resume' onClick={showNavbar}>Resume</a>
       <button className='nav-btn nav-close-btn' onClick={showNavbar}>
        <FaTimes/>
       </button>
       </nav>
       <button className='nav-btn' onClick={showNavbar}>
        <FaBars/>
       </button>
      </header>
      <Layout handleClick={closeNavbar}/>
  
      </>
    );
  }
  
export default PApp;


