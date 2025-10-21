import React from "react";
import "./About.css";

const About = () => {
    return (
        <section id="about" className="about">
          <div className="about-box">
          <h2>{`{About}`}</h2>
          <p>
          I am a passionate software developer who loves building efficient,
          scalable, and user-friendly applications. Always eager to learn new
          technologies and grow as a developer.
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
          <span>Html</span>
          <span>Swift</span>
          <span>Git</span>
          

        </div>
        </div>
        </section>
      );

}

export default About;