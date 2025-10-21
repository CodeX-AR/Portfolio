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
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FaGithub size="100"/>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size="100" />
          </a>
          <a href="mailto:yourmail@example.com">
            <FaEnvelope size="100"  />
          </a>
        </div>
      </div>

        {/* Resume Box */}
        <div className="resume-box">
        <h2>{`{Resume}`}</h2>
        <div class="spacer"></div>
        <a href="/resume.pdf" download className="resume-button">
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;

