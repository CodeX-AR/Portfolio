import React from "react";
import "./Navbar.css";
import { FaHamburger } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="#logo" className="logo">Portfolio</a>
            <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#about">Skills</a>
            <a href="#resume-contact">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;