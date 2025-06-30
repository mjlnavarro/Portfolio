import React from "react";
import "../styles/Navbar.css";

function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#gallery">Certficiates & Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><button onClick={toggleTheme} className="theme-toggle">{theme === "light" ? "🌙" : "☀️"}</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;