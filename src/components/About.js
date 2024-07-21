import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../index.css'; 

const About = () => {
  return (
    <section id="about" className="about-section p-5">
      <Container>
        <Row>
          <Col md={6}>
            <h1>Xiaoting Ma</h1>
            <h2>Web Developer & Software Developer</h2>
            <h3>Driven by a genuine passion for learning and a love for technology</h3>
            <p> I love immersing myself in ideas, data and coding to drive meaningful 
            insights and create impactful outcomes. As a developer skilled in 
            both front-end and back-end development, I am proficient in various 
            programming languages, frameworks, and technologies. With a strong 
            background in development, maintenance, and Agile environments, I am 
            a quick learner, adaptable, and proactive.</p>

            <Button variant="outline-primary" href="#contact">Contact Me</Button>
          </Col>
          <Col md={6}>
            <img src="profile3.jpg" alt="Xiaoting Ma's profile" className="img-fluid rounded-circle profile-img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
