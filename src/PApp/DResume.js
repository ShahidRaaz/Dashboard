import "./DResume.css";
import PResume from './preview.png'
import React from 'react';
class DResume extends React.Component{
    render(){
    return (
        <div align="center" id="Dr"> 
        <img src={PResume} id="preview" alt="preview"/>
        <br/>
        <span id="sp" className="dr">
        <a className="link" href="https://drive.google.com/file/d/1U3eDlO_Du5ZGqt2_Z_J6ByLsTA2MVfFJ/view" target="_blank" rel="noreferrer">Download Resume</a>
        </span>
        </div>
        
    )
}
}
export default DResume;