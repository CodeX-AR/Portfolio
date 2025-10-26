import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "CareerBoard",
    desc: "A job tracking platform where users can log in, track applications, interviews, and manage their career progress.",
    tags: ["MERN", "CSS", "JavaScript"],
    link: "https://career-board.onrender.com"
  },

  {
    title: "Build My Resume",
    desc: "Build and preview resumes in real-time, side-by-side, for a smooth resume creation experience.",
    tags: ["MERN", "CSS", "JavaScript"],
    link: "https://buildmyresume-c.onrender.com"
  },

  {
    title: "Weatherbitz",
    desc: "A desktop-focused weather app fetching data from Tomorrow and Open-Meteo APIs to provide current and forecasted weather.",
    tags: ["React", "Node.js", "JavaScript"],
    link: "https://weatherbitzz.onrender.com"
  },

  {
    title: "Kanbanza",
    desc: "A task management app with a Kanban-style board for organizing and tracking tasks.",
    tags: ["MERN", "CSS", "JavaScript"],
    link: "https://kanbanza.onrender.com"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>{`{Projects}`}</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
            <div key={index} className="project-card" onClick={() => window.open(proj.link, "_blank" ,"noopener noreferrer")}style={{ cursor: "pointer" }}>
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