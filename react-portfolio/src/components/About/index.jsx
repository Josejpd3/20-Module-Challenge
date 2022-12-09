import React from "react";
import './about.css'
import img from './img/joseplasencia-circle.png'

const About = () => {
    return (
        <div className="about">
            <h2>About Me</h2>
            <img src={img} style={{width: '104px', border: '2px solid black', borderRadius: '50%'}} alt="Jose Plasencia Profile" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    );
}

export default About;