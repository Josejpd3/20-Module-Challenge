import React from "react";

const Nav = ({ showAbout, showProjects, showContact }) => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h1 onClick={showAbout}>About</h1>
            <h1 onClick={showProjects}>Projects</h1>
            <h1 onClick={showContact}>Contact</h1>
        </div>
    );
}