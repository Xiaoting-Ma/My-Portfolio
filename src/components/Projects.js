import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../index.css';

const projectsData = [
  {
    title: "Auto Job (Job Hunting Tool)",
    tags: ["React", "MUI", "AWS", "MySQL", "Java", "Spring Boot"],
    description: `
      A cloud-based app to simplify APS job searches by providing customized matches and emailing users suitable 
      listings based on their preferences, with job postings stored in a database.  
      Built with React and MUI for a seamless front-end, and Java Spring Boot for robust backend performance.
       Deployed on AWS, using MySQL for data, Redis for caching, and Docker for containerization. 
    `,
    note: "(This project is currently in the testing phase and is not yet live)",
    videoSrc: "https://www.youtube-nocookie.com/embed/zUHwDKpzP8Q",
  },
  {
    title: "DuoTask",
    tags: ["React", "MUI", "Node.js", "Supabase", "Firebase"],
    description: `
      A task management app using web technologies to help users organize tasks, featuring authentication, categorization, 
      and responsive design, with backend and database management.
      Built with React, Material-UI, and Axios for API calls. It features a Node.js and Express backend, PostgreSQL database
       via Supabase, and Firebase Authentication for secure login. Deployed on Vercel with continuous integration and automated
        deployment, DuoTask is designed for intuitive and efficient task management.
    `,
    siteLink: "https://task-management-app-three-green.vercel.app/",
    codeLink: "https://github.com/Xiaoting-Ma/Task-Management-App",
    imageSrc: "image2.png",
  },
  {
    title: "Tax Calculator",
    tags: ["React", "MUI"],
    description: `
      The application allows users to estimate their taxes in real-time by entering personal information. Built with React and 
      styled using MUI and Emotion, it lets users select the income year, enter total taxable income, and specify residency 
      status. It offers a responsive and intuitive user experience and is deployed on GitHub Pages for easy access and real-time
       tax calculations.
    `,
    siteLink: "https://xiaoting-ma.github.io/Tax-Calculator/",
    codeLink: "https://github.com/Xiaoting-Ma/Tax-Calculator",
    imageSrc: "image1.png",
  },
  {
    title: "Dog Walker",
    tags: ["Java", "SQLite", "Design Pattern"],
    description: `
      TheDogWalker is a marketplace app connecting dog owners with dog walkers. Developed with Android Studio using Java and 
      XML, it employs SQLite for data storage and uses Hashmaps and AVL trees for efficient data management. Walkers can 
      request and obtain approval for walking dogs. The app ensures robust performance through comprehensive testing and 
      design patterns like Facade, Singleton, and Factory.
    `,
    imageSrc: "image3.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section p-5">
      <Container>
        <h2 className="text-center mb-4">MY LATEST WORK</h2>
        {projectsData.map((project, index) => (
          <div key={index} className={`project-card ${index % 2 === 0 ? "project-card-left" : "project-card-right"}`}>
            <Row className="align-items-center">
              <Col md={index % 2 === 0 ? 6 : { span: 6, order: 2 }}>
                {project.videoSrc ? (
                    <iframe 
                      width="100%"
                      height="380"
                      src={project.videoSrc}
                      title={project.title}
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  
                ) : (
                  <a href={project.siteLink} target="_blank" rel="noopener noreferrer">
                    <img src={project.imageSrc} alt={project.title} className="project-image" />
                  </a>
                )}
              </Col>
              <Col md={index % 2 === 0 ? 6 : { span: 6, order: 1 }}>
                <h3>{project.title}</h3>
                <div className='tags-container'>
                  {project.tags.map((tag, tagIndex) => (
                    <div key={tagIndex} className='tags'><span>{tag}</span></div>
                  ))}
                </div>
                <p>{project.description}</p>
                {project.note && <p>{project.note}</p>}
                {project.siteLink && <Button variant="contained-primary" href={project.siteLink} aria-label={`Visit ${project.title}`}>Visit Site</Button>}
                {project.codeLink && <Button variant="outline-primary" href={project.codeLink} aria-label={`View code for ${project.title}`}>View Code</Button>}
              </Col>
            </Row>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default Projects;
