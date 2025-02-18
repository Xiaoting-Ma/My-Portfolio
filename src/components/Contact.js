import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import '../index.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section p-5">
      <Container className="contact-container">
        <Row>
          <Col md={3}>
            <h5>Email</h5>
            <p>xiaoting.ma0124@gmail.com</p>
          </Col>
          <Col md={3}>
            <h5>Address</h5>
            <p>Casey, ACT</p>
          </Col>
          <Col md={3}>
            <h5>Follow Me</h5>
            <p className= "contact-icons">
            <a href="https://www.instagram.com/xiaoting.ma1012/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24}/>
            </a>
            <a href="https://github.com/Xiaoting-Ma/" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24}/>
            </a>
            <a href="https://www.linkedin.com/in/xiaoting-ma" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
            </p>
          </Col>
          <Col md = {3} className="text-center mt-1">
            <div>© 2025-present Xiaoting Ma. All rights reserved</div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;