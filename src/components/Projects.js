import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../index.css';

const projectsData = [
  {
    title: "Auto Job (Job Hunting Tool)",
    tags: ["React", "MUI", "AWS", "MySQL", "Java", "Spring Boot"],
    description: `
      Auto Job is a web application designed to streamline the job hunting process. It utilizes React 
      and Material UI for the front-end, providing a seamless and user-centric interface. The backend is 
      built with Java and Spring Boot, ensuring robust authorization and performance optimization. The tool 
      integrates with AWS for deployment and MySQL for data management, using Redis for caching and Docker 
      for containerization. GitHub is employed for version control, fostering a collaborative development 
      environment.
    `,
    note: "(This project is currently in the testing phase and is not yet live)",
    videoSrc: "https://www.youtube-nocookie.com/embed/zUHwDKpzP8Q",
  },
  {
    title: "DuoTask",
    tags: ["React", "MUI", "Node.js", "Supabase", "Firebase"],
    description: `
      DuoTask is a full-stack task management app built with React and Material-UI, featuring Axios for API calls, a Node.js 
      and Express backend, and a PostgreSQL database via Supabase. It uses Firebase Authentication for secure login 
      and is deployed on Vercel with continuous integration and automated deployment. DuoTask is designed to be 
      intuitive and efficient, making task management simple and enjoyable.
    `,
    siteLink: "https://task-management-app-three-green.vercel.app/",
    codeLink: "https://github.com/Xiaoting-Ma/Task-Management-App",
    imageSrc: "image2.png",
  },
  {
    title: "Tax Calculator",
    tags: ["React", "MUI"],
    description: `
      This is a web application built with React and styled using Material-UI (MUI) and Emotion. It allows users to 
      estimate their taxes by selecting the income year, entering their total taxable income, and specifying their 
      residency status.
    `,
    note: "The application provides a responsive and intuitive user experience. Deployed on GitHub Pages, it ensures easy access and real-time tax calculations.",
    siteLink: "https://xiaoting-ma.github.io/Tax-Calculator/",
    codeLink: "https://github.com/Xiaoting-Ma/Tax-Calculator",
    imageSrc: "image1.png",
  },
  {
    title: "Dog Walker",
    tags: ["Java", "SQLite"],
    description: `
      TheDogWalker is a marketplace app that connects dog owners with people interested in walking dogs. 
      Developed with Android Studio using Java and XML, it employs SQLite for data storage and uses Hashmaps 
      and AVL trees for efficient data management. The app ensures robust performance through comprehensive 
      testing and design patterns like Facade, Singleton, and Factory.
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
