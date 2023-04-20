import "./Contact.css";
import React from 'react';
import instaimg from './instagram-new.png'
import fbimg from './facebook-new.png'
import twitimg from './twitter.png'
class Contact extends React.Component{
    render(){
    return (
        <div id="Contact" align="center"> 
            <span id="para2">What's Next</span>
            <h3 id="h3id">Get in Touch</h3>
            <div id="pdetails">
            <span id="para3">
                My inbox is always open. Whether you have a question or just want to say hello, I'll try my best to get back to you! Feel free to mail me about any relevant job updates.
            </span>
            </div>
            <h4 id="h4id">You can also contact me here</h4>
                <a href="https://www.instagram.com/taqaddusshafi/" target="_blank" rel="noreferrer">
                <img alt="1" src={instaimg} id="cmimg"/>
                </a>
                <a href="https://www.facebook.com/taqaddus.shafi.3/" target="_blank" rel="noreferrer">
                <img alt="1" src={fbimg} id="cmimg"/>
                </a>
                <a href="https://twitter.com/TaqaddusShafi" target="_blank" rel="noreferrer">
                <img alt="1" src={twitimg} id="cmimg"/>
                </a>
           
        </div>
    )
}
}
export default Contact;