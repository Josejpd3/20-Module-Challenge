import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';

const Nav = ({ showAbout, showProjects, showContact, showResume }) => {
    return (
      <header>
        <h1>Jose Plasencia</h1>
        <nav>
          <button onClick={showAbout}>About Me</button>
          <button onClick={showProjects}>Projects</button>
          <button onClick={showContact}>Contact Me</button>
          <button onClick={showResume}>Resume</button>
        </nav>
      </header>
    );
}

export default Nav;