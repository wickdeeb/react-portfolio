import React from 'react';

function Projects() {
  return(
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="project-card">
        <h1>Realestate</h1>
        <img src="https://www.juliedesk.com/wp-content/uploads/2017/06/1200x600-default-facebook.png" alt="project" />
        <h4>Front-end</h4>
        <ul>
          <li>React</li>
          <li>React-Router</li>
          <li>Sass</li>
        </ul>
        <div className="project-button">View Site</div>
        <div className="project-button">Github</div>
      </div>
    </div>
  );
}

export default Projects;