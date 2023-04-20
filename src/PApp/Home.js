import "./Home.css";
import React from 'react';
class Home extends React.Component{
    render(){
    return (
        <div id="Home"> 
                <p id="p"> HI,</p>
                <span id="me">I am </span><span id="p1">Taqaddus Shafi</span>
                <p id="p2">I love to change imaginations into reality</p>
                <p id="p3">An aspiring Mobile Application Developer with the ability to Develop awesome mobile apps and solve real world problems.</p>
                <p id="p4">I am always open to have discussions <a href="https://www.linkedin.com/in/taqaddus-shafi-36b2701b5/" target="_blank" rel="noreferrer" id="p4id">@LinkedIn</a>.</p>
                <div id="Hire">
                <span id="sp1">
                    <a id="link1" href="https://meet.google.com/" target="_blank" rel="noreferrer">Hire Me</a>
                </span>
                </div>  
        </div>
    )
}
}
export default Home;