import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import "./Projects.css";

function Projects() {
  return (
    <>
      <svg
        height='100%'
        width='100%'
        id='svg'
        viewBox='0 0 1440 400'
        xmlns='http://www.w3.org/2000/svg'
        className='wave-svg'
      >
        <path
           d="M0,64L80,85.3C160,107,320,149,480,149.3C640,149,800,107,960,85.3C1120,64,1280,64,1360,64L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          stroke='none'
          fill=' #255876'
          className='wave-path'
          transform='rotate(-180 720 200)'
        ></path>
      </svg>

      <div className='ProjectWrapper' id='projects'>
        <div className='Container'>
          <div className='SectionTitle'>Projects</div>
          <ProjectCard />
        </div>
      </div>
    </>
  );
}

export default Projects;
