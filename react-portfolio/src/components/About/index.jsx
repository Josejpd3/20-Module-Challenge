import React from "react";
import './about.css'
import img from './img/joseplasencia-circle.png'

const About = () => {
    return (
        <div className="about">
            <h2>About Me</h2>
            <img src={img} style={{width: '104px', border: '2px solid black', borderRadius: '50%'}} alt="Jose Plasencia Profile" />
            <p>located in Kissimmee, FL, with over 4 years of experience developing, designing, testing, and deploying web and desktop applications. I have constructed numerous applications for local businesses, wanting to either showcase their services on the web or manage their business efficiently by utilizing personalized software that I have developed. At the same time, having constant communication with these clients to ensure that their requirements and specifications are met with competence and precision. Writing structured code along with insightful comments and documentation in order for other developers to easily jump in and maintain these applications.</p>
        </div>
    );
}

export default About;