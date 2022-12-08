import React from "react";
import Container from 'react-bootstrap/Container';
import NavSec from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';

const Nav = ({ showAbout, showProjects, showContact, showResume }) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-NavSec" />
          <Navbar.Collapse id="responsive-navbar-NavSec" >
            <NavSec className="me-auto justify-content-md-center">
              <NavSec.Link onClick={showAbout}>About</NavSec.Link>
              <NavSec.Link onClick={showProjects}>Projects</NavSec.Link>
              <NavSec.Link onClick={showContact}>Contact</NavSec.Link>
              <NavSec.Link onClick={showResume}>Resume</NavSec.Link>
            </NavSec>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Nav;