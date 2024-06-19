import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../index.css';

const Experiences = () => {
  const experiences = [
    {
      dateRange: "2019 - 2022",
      title: "Customer Service Associate",
      subtitle: "Canberra, Australia", 
      description: "I excelled in delivering exceptional service by promptly resolving customer inquiries and issues. I developed strong skills in managing POS systems, processing payments, and handling refunds. Additionally, I organized merchandise and managed store operations, ensuring a smooth and efficient customer experience."
    },
    {
      dateRange: "2014 - 2018",
      title: "Cost Manager and Telecommunication Engineer",
      subtitle: "Xining, China", 
      description: "I managed monthly departmental costs and prevented budget overruns through detailed expense analysis. I prepared comprehensive plans for the installation and upgrade of wireless networks in telecommunication systems and minimized system malfunctions by designing and implementing a robust maintenance and service routine."
    }
  ];

  const education = [
    {
      dateRange: '2022 - 2023',
      title: "The Australian National University",
      degree: "Master of Computing", 
      description: "Software Design, Web Development, Algorithms, Managing Software Development, Computer Networks, Computer Vision, Relational Database, Human-Computer Interaction"
    },
    {
      dateRange: '2010 - 2014',
      title: "Huazhong University of Science and Technology",
      degree: "Bachelor of Automation", 
      description: "Data Structure, Internet Technology and Applications, Digital Circuits and Logic Programming, Foundation of Electrical & Programmable Control, Computer Network, Pattern Recognition. "
    }
  ];
    

  return (
    <section id="experiences" className="p-5">
      <Container className='experiences-section'>
        <Row>
          <Col md={5}>
            <h2 className="text-center mb-4">EXPERIENCE</h2>
          </Col>
          <Col md={7}>
            {experiences.map((exp, index) => (
              <Row key={index} className="experience-row mb-4">
                <Col md={3}>
                  <p className="date-range">{exp.dateRange}</p>
                </Col>
                <Col md={8}>
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-subtitle">{exp.subtitle}</p>
                  <p>{exp.description}</p>
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
      </Container>
      <Container className='experiences-section'>
        <Row>
          <Col md={5}>
            <h2 className="text-center mb-4">EDUCATION</h2>
          </Col>
          <Col md={7}>
            {education.map((exp, index) => (
              <Row key={index} className="experience-row mb-4">
                <Col md={3}>
                  <p className="date-range">{exp.dateRange}</p>
                </Col>
                <Col md={8}>
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-subtitle">{exp.degree}</p>
                  <p>{exp.description}</p>
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experiences;