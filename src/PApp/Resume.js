import "./Resume.css";
import React from 'react';
import { Link } from "react-router-dom";
class Resume extends React.Component{
    render(){
    return (
        <div align="center" id="Resume"> 
        <span id="sp">
        <Link to="/DResume" className='link'>
        Preview Resume
        </Link>
        </span>
        <p id="ref">
            Made with Love by
        <h4 id="nref">Taqaddus Shafi</h4>
        </p>
        </div>
        
    )
}
}
export default Resume;