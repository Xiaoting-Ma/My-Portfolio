import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../index.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section p-5">
      <Container>
        <h2 className="text-center mb-4">MY LATEST WORK</h2>
        <div className="project-card project-card-left">
          <Row className="align-items-center mb-4">
            <Col md={6}>
                <div className="project-image">
                <iframe 
                    width="100%"
                    height="350"
                    src="https://www.youtube.com/embed/zUHwDKpzP8Q"
                    title="AutoJob Introduction"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                </div>
            </Col>
            <Col md={6}>
                <h3>Auto Job (Job Hunting Tool)</h3>
                <p>Auto Job is a web application designed to streamline the job hunting process. It utilizes React 
                and Material UI for the front-end, providing a seamless and user-centric interface. The backend is 
                built with Java and Spring Boot, ensuring robust authorization and performance optimization. The tool 
                integrates with AWS for deployment and MySQL for data management, using Redis for caching and Docker 
                for containerization. GitHub is employed for version control, fostering a collaborative development 
                environment.</p>
                <p>(This project is currently in the testing phase and is not yet live)</p>
            </Col>
          </Row>
        </div>
        <div className="project-card project-card-right">
          <Row className="align-items-center mb-4">
            <Col md={{ span: 6, order: 2 }}>
              <a href="https://task-management-app-three-green.vercel.app/" target="_blank" rel="noopener noreferrer">
                <img src="image2.png" alt="Tax Calculator App" className="project-image" />
              </a>
            </Col>
            <Col md={{ span: 6, order: 1 }}>
              <h3>DuoTask APP</h3>
              <p>DuoTask is a full-stack task management app built with React and Material-UI, featuring Axios for API calls, a Node.js 
              and Express backend, and a PostgreSQL database via Supabase. It uses Firebase Authentication for secure login 
              and is deployed on Vercel with continuous integration and automated deployment. DuoTask is designed to be 
              intuitive and efficient, making task management simple and enjoyable.</p>
              <Button variant="outline-primary" href="https://task-management-app-three-green.vercel.app/" >Go to DuoTask App</Button>
            </Col>
          </Row>
        </div>
        <div className="project-card project-card-left">
          <Row className="align-items-center">
            <Col md={6}>
              <a href="https://xiaoting-ma.github.io/Tax-Calculator/" target="_blank" rel="noopener noreferrer">
                <img src="image1.png" alt="Tax Calculator App" className="project-image" />
              </a>
            </Col>
            <Col md={6}>
              <h3>Tax Calculator</h3>
              <p>This is a web application built with React and styled using Material-UI (MUI) and Emotion. It allows users to 
              estimate their taxes by selecting the income year, entering their total taxable income, and specifying their 
              residency status. 
              </p>
              <p>The application provides a responsive and intuitive user experience. Deployed on GitHub Pages, 
              it ensures easy access and real-time tax calculations.</p>
              <Button variant="outline-primary" href="https://xiaoting-ma.github.io/Tax-Calculator/" >Go to Tax Calculator Web</Button>
            </Col>
          </Row>
        </div>
        <div className="project-card project-card-right">
          <Row className="align-items-center mb-4">
            <Col md={{ span: 6, order: 2 }}>
              <div className="project-image"></div>
            </Col>
            <Col md={{ span: 6, order: 1 }}>
              <h3>"Dog Walker" Android App</h3>
              <p>Created responsive front-end using React and Bootstrap...</p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Projects;