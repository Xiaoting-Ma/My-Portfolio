import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../index.css'; // Make sure this CSS file includes the styles for the circular buttons

const About = () => {
  return (
    <section id="about" className="about-section p-5">
      <Container>
        <Row>
          <Col md={7}>
            <h1>Hello I am</h1>
            <h2>Xiaoting Ma</h2>
            <h3>Web Developer</h3>
            <p>I am a web developer skilled in both front-end and back-end development.
            Proficient in various programming languages, frameworks, and technologies. 
            Strong background in development, maintenance, and Agile environments. 
            Quick learner, adaptable, and proactive.</p>

            <Button variant="outline-primary" href="#contact">Contact Me</Button>

            {/* <div className="circular-buttons mt-4">
              <a href="#resume" className="circular-button" style={{ backgroundColor: '#9cb1cb' }}>My Work</a>
              <a href="#projects" className="circular-button" style={{ backgroundColor: '#7AB2B2' }}>Experience</a>
              <a href="#contact" className="circular-button" style={{ backgroundColor: '#CDE8E5' }}>Contact Me</a>
            </div> */}
          </Col>
          <Col md={5}>
            <img src="profile2.jpg" alt="Xiaoting Ma" className="img-fluid rounded-circle profile-img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
