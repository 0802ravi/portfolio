import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Website',
      description: 'Full-stack e-commerce platform built with React and Node.js.',
      imageUrl: 'ecommerce.jpg',
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com/example'
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio site showcasing skills and projects.',
      imageUrl: 'portfolio.jpg',
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com/example'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Demo</a>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
