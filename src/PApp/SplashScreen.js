import React from 'react';
import "./SplashScreen.css"
import aimg1 from './Logo.png'

class SplashScreen extends React.Component{
render(){
    return (
        <center>
        <div id="splashScreen">
            <div className="content">
                <div className="splash-screen">
                <img alt="img1" id="i1" src={aimg1}/>
                </div>
            </div>
        </div>
        </center> 
    )
}
}
export default SplashScreen;