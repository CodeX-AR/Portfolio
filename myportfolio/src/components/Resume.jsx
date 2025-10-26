import React from "react";
import "./Resume.css";
import { FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";

const Resume = () => {
  return (
    <section id="resume-contact" className="resume-contact">

      {/* Contact Box */}
      <div className="contact-box">
        <h2>{`{Contact}`}</h2>
        <div className="contact-icons">
          <a href="https://github.com/CodeX-AR" target="_blank" rel="noopener noreferrer">
          <FaGithub size="100"/>
          </a>
          <a href="https://www.linkedin.com/in/raj-kumari-soren-506074199/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size="100" />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&to=sorenrajj19@gmail.com&su=Portfolio%20Contact&body=Hi%20there," target="_blank" rel="noopener noreferrer">
            <FaEnvelope size="100"  />
          </a>
        </div>
      </div>

        {/* Resume Box */}
        <div className="resume-box">
        <h2>{`{Resume}`}</h2>
        <div class="spacer"></div>
        <a href="/Raj's Resume.pdf" download className="resume-button">
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;

