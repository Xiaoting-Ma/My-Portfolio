import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../index.css';

const Experiences = () => {
  const experiences = [
    {
      dateRange: "2019 - 2022",
      title: "Customer Service Associate",
      subtitle: "Canberra, Australia", 
      description: ["Provided customer service to 1,000+ visitors daily, promptly addressing inquiries and resolving issues, achieving a high level of customer satisfaction. ", "Improved product selection and store displays by analyzing customer feedback, contributing to continuous improvement initiatives. ", "Streamlined processes to improve efficiency and service quality, resulting in better understanding and fulfillment of customer needs."]
    },
    {
      dateRange: "2014 - 2018",
      title: "Telecommunication Engineer and Cost Manager",
      subtitle: "Xining, China", 
      description: ["Led a team of 100+ engineers on major projects, effectively managing departmental costs and budget for 7 key groups, resulting in optimized resource allocation. ", "Prepared and executed plans for installations and upgrades of wireless networks, enhancing wireless network systems' efficiency and coverage.", "Reduced system malfunctions by designing and implementing a robust maintenance and service routine, significantly improving system reliability.", "Earned Employee of the Year award and received a promotion to Cost Manager within two years for exceptional performance."]
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
      dateRange: '2024',
      title: "The Complete 2024 Web Development Bootcamp",
      degree: "Udemy Coursework", 
      description: "Full-Stack Web Developer skills with HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps. " 
    },
    {
      dateRange: '2024',
      title: "Ultimate AWS Certified Cloud Practitioner CLF – C02",
      degree: "Udemy Coursework", 
      description: "AWS cloud computing, including core services (EC2, S3, RDS), security and compliance, billing and pricing, support resources, and basic architectural principles. " 
    },
    {
      dateRange: '2010 - 2014',
      title: "Huazhong University of Science and Technology",
      degree: "Bachelor of Automation", 
      description: "Data Structure, Internet Technology and Applications, Digital Circuits and Logic Programming, Foundation of Electrical & Programmable Control, Computer Network, Pattern Recognition."
    }, 
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
                <Col md={9}>
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-subtitle">{exp.subtitle}</p>
                  <ul>
                    {exp.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
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
            {education.map((edu, index) => (
              <Row key={index} className="experience-row mb-4">
                <Col md={3}>
                  <p className="date-range">{edu.dateRange}</p>
                </Col>
                <Col md={9}>
                  <h3 className="experience-title">{edu.title}</h3>
                  <p className="experience-subtitle">{edu.degree}</p>
                  <p>{edu.description}</p>
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
