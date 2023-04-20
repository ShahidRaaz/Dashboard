import React from 'react'
import About from "./About.js";
import Home from "./Home.js";
import Projects from "./Projects";
import Contact from "./Contact";
import Resume from './Resume.js';
import './Layout.css'
const Layout = ({handleClick}) => {
  return (
    <div className='Layout' onClick={handleClick}>
      <div><Home/></div>
      <div><About/></div>
      <div><Projects/></div>
      <div><Contact/></div>
      <div><Resume/></div>
    </div>
  )
};


export default Layout;