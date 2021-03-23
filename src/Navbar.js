import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navi(){
  return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
  <Navbar.Brand as={Link} to="/">Owusu Bonsu </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="./Resume">Resume</Nav.Link>
      <Nav.Link as={Link} to="./Projects">Projects</Nav.Link>
      <NavDropdown title="Other Links" id="collasible-nav-dropdown">
        <NavDropdown.Item href="https://www.linkedin.com/in/owusu-bonsu/">LinkedIn</NavDropdown.Item>
        <NavDropdown.Item href="https://github.com/OwusuBonsu">Github</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);
}

export default Navi;