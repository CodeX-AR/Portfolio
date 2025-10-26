import React from "react";
import "./About.css";

const About = () => {
    return (
        <section id="about" className="about">
          <div className="about-box">
          <h2>{`{About}`}</h2>
          <p>
          I’m a software developer with 2+ years of experience building iOS apps and a growing passion for full-stack development. 
          Recently, I’ve been focusing on the MERN stack, creating web applications that are both functional and user-friendly.
           I love turning complex problems into simple, elegant solutions and am always exploring new technologies to make my 
           work even better.
          </p>
          </div>

          <div className="about-box">
        <h2>{`{Skills}`}</h2>
        <div className="skills-grid">
          
          <span>JavaScript</span>
          <span>MongoDB</span>
          <span>Express.js</span>
          <span>React</span>
          <span>Node.js</span>
          <span>CSS</span>
          <span>HTML</span>
          <span>Swift</span>
          <span>Git</span>
          <span>VS Code</span>
          <span>Postman</span>
          <span>Render</span>
      
          

        </div>
        </div>
        </section>
      );

}

export default About;