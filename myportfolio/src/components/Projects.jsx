import React from "react";
import "./Projects.css";

const projects = [
  { title: "Weatherbitz", desc: "Weather Website", tags: ["React", "CSS", "Node.js"] },
  { title: "Project Two", desc: "Improved web system.", tags: ["JavaScript", "Script"] },
  { title: "Project Three", desc: "Developer tools improvement.", tags: ["JavaScript", "TypeScript"] },
  { title: "Project Four", desc: "A showcase project.", tags: ["TypeScript", "GraphQL"] },
];
  
  const Projects = () => {
    return (
      <section id="projects" className="projects">
        <h2>{`{Projects}`}</h2>
        <div className="projects-grid">
          {projects.map((proj, index) => (
            <div key={index} className="project-card">
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
              <div className="tags">
              {proj.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
            </div>
        </div>
          ))}
          </div>
      </section>
    );
}

export default Projects;