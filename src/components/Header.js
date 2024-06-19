import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { FaSun, FaMoon } from 'react-icons/fa';
import '../index.css';

const Header = ({ toggleTheme, isDarkMode }) => {
  return (
    <Navbar bg={isDarkMode ? 'dark' : 'light'} variant={isDarkMode ? 'dark' : 'light'} expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="brand-name">Xiaoting Ma</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about" className="ms-3">About</Nav.Link>
            <Nav.Link href="#skills" className="ms-3">Skills</Nav.Link>
            <Nav.Link href="#projects" className="ms-3">Projects</Nav.Link>
            <Nav.Link href="#contact" className="ms-3">Contact</Nav.Link>
            <Button variant="outline-secondary" onClick={toggleTheme} className="ms-4">
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;