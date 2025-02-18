import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../index.css';

const Experiences = () => {
  const experiences = [
    {
      dateRange: "2024 – Present",
      title: "Full Stack Developer",
      subtitle: "Qixin Network - Canberra, Australia",
      description: [
        "Designed and developed an enterprise information-sharing website, handling layout, development, SEO, and optimization to boost traffic and user experience.",
        "Developed both frontend and backend using React and Node.js, including company showcase features, user authentication for individuals and enterprises, and customer management systems.",
        "Designed and developed the database using MongoDB, ensuring efficient and scalable data storage and retrieval for companies and users."
      ]
    },
    {
      dateRange: "2024",
      title: "IT Support",
      subtitle: "Trusted Realtors - Dickson, Canberra",
      description: [
        "Led the transition of the property management system, reviewed hundreds of property records, ensuring a seamless migration and improving operational efficiency.",
        "Mastered the new system and provided system operation training for the company team, greatly enhancing workflow efficiency.",
        "Restructured and improved lease agreements, rent collection, and tenant screening processes, increasing property management efficiency and tenant satisfaction."
      ]
    },
    {
      dateRange: "2024 – Present",
      title: "Youth Coding Camp Lead Instructor",
      subtitle: "OZ Code Academy - Harrison, Canberra",
      description: [
        "Implemented interactive coding workshops to enhance students' problem-solving abilities.",
        "Supported the setup and maintenance of digital learning tools and environments, ensuring smooth operation and accessibility for all participants.",
        "Collaborated with lead instructors to refine and optimize the curriculum based on real-time feedback, enhancing the educational impact of programming concepts."
      ]
    },
    {
      dateRange: "2014 - 2018",
      title: "Telecommunication IT Engineer and Cost Manager",
      subtitle: "China Unicom - Xining, China", 
      description: ["Managed departmental costs and budget for 7 key projects in a team of 100+ engineers, resulting in optimized resource allocation.", "Prepared plans for installations and upgrades of wireless networks in telecommunication systems.", "Developed and implemented IT support guidelines. Managed daily IT desktop and meeting support tasks, ensuring smooth operation of internal meeting systems and office software accounts. ", "Optimized internal maintenance processes through automation to increase efficiency and quality. ", "Integrated internal systems for network data sharing, developing interfaces for engineers and ensuring data security and consistency. ", "Earned Employee of the Year award and received a promotion within two years. "]
    }, 
    // {
    //   dateRange: "2019 - 2022",
    //   title: "Customer Service Associate",
    //   subtitle: "Retail Store - Canberra, Australia", 
    //   description: ["Provided customer service to 1,000+ visitors daily, promptly addressing inquiries and resolving issues, achieving a high level of customer satisfaction. ", "Improved product selection and store displays by analyzing customer feedback, contributing to continuous improvement initiatives. ", "Streamlined processes to improve efficiency and service quality, resulting in better understanding and fulfillment of customer needs."]
    // }
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
    <section id="experiences" className="p-2">
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
