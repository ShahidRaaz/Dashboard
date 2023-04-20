import "./Projects.css";
import React from 'react';
import giticon from './github.png'
class Projects extends React.Component{
    render(){
    return (
        <div id="Projects"> 
        <p id="para1">Some thing I've Built</p>
        <div class="flex-container">
            <div class="flex-item">
                <a href="https://github.com/Taqaddusshafi/Jk-_Browser">
                <img alt="error" src={giticon} className="img"/>
                </a>
                <h5 className="pn">Mutlipage Browser APP</h5>
                <p className="prp">Developed an app in andriod studio based on webview which can open 4 tabs widow option which alow user to browse 4 pages at a same time and also browser do not also track the history of user.</p>
                <footer>Java and XML</footer>
            </div>
            <div class="flex-item">
                <a href="https://github.com/Taqaddusshafi/userstatsapp">
                <img alt="error" src={giticon} className="img"/>
                </a>
                <h5 className="pn">Usagestats App</h5>
                <p className="prp">Developed an app which tracks the usage time of apps.For implementation used the UsageStatsManager library provided by andriod and along with this used calander instance to deal with usage time.</p>
                <footer>Kotlin and XML</footer>
            </div>
            <div class="flex-item">
                <a href="https://github.com/Taqaddusshafi/profile_app">
                <img alt="error" src={giticon} className="img"/>
                </a>
                <h5 className="pn">Profile App</h5>
                <p className="prp">Developed a resume app where i showcase my education,projects,skills and achivements.Used the bascis concepts of flutter to implement navbar,ulr launcher,and responsive design across all moblie platforms</p>
                <footer>Dart</footer>
            </div>
        </div>
        <div class="flex-container">
            <div class="flex-item">
                <a href="https://github.com/Taqaddusshafi/fitness_comiunity_app">
                <img alt="error" src={giticon} className="img"/>
                </a>
                <h5 className="pn">Fitness Comunity app</h5>
                <p className="prp">Developed an app which was based on fitness comunity it was a group project where my main part to design and develop login,signup and about page and implement the firebase instance for login and signup validation.</p>
                <footer>Dart</footer>
            </div>
            <div class="flex-item">
                <a href="https://github.com/Taqaddusshafi/income_tax_clone">
                <img alt="error" src={giticon} className="img"/>
                </a>
                <h5 className="pn">Cloned First Page (Income Tax Website)</h5>
                <p className="prp">I cloned the First page of Incometax India website using Html css, Designed and Implemented navbar,contact form and marquee effects with the help of html. And used css for desigin the impressive Ul.</p>
                <footer>HTML and CSS</footer>
            </div>
            <div class="flex-item">
                <a href="https://github.com/Taqaddusshafi/Web_APP">
                <img alt="error" src={giticon} className="img"/>
                </a>
                <h5 className="pn">Responsive Portfolio WebApp</h5>
                <p className="prp">Developed a responsive portfolio webapp in flutter with lot of features like animation effects,hover effects,flutter keyboard focus system, responsive for all devices and beautifull UI design with the help of dart.</p>
                <footer>Flutter and Dart</footer>
            </div>
        </div>      
        </div>
    )
}
}
export default Projects;