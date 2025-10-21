import React from "react";
import "./Hero.css";
import avatar from "../assets/avatar.svg";

const Hero = () => {
    return (
        <>
            <section id="hero" className="hero">
                <div className="hero-left">
                    <div className="hero-text">
                        <h1>Hello, I'm  <span>Raj Kumari Soren</span></h1>
                        <p>
                            I’m a software developer specializing in building (and occasionally designing) 
                            exceptional digital experiences.
                        </p>
                        <a href="#projects" className="hero-button">View Projects</a>
                    </div>
                    </div>
                    <div className="hero-right">
                        <img src={avatar} alt="Pixel Avatar" className="hero-avatar" />
                    </div>
            </section>
        </>
    )

}

export default Hero;