import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";

function Navbar({ theme, toggleTheme }) {
  const [isShrunk, setIsShrunk] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 50);

      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isShrunk ? "shrink" : ""}`}>
      <ul className="nav-links">
        <li>
          <a href="#about" className={activeSection === "about" ? "active" : ""}>
            About
          </a>
        </li>
        <li>
          <a href="#experience" className={activeSection === "experience" ? "active" : ""}>
            Experience
          </a>
        </li>
        <li>
          <a href="#skills" className={activeSection === "skills" ? "active" : ""}>
            Skills
          </a>
        </li>
        <li>
          <a href="#gallery" className={activeSection === "gallery" ? "active" : ""}>
            Certificates
          </a>
        </li>
        <li>
          <a href="#contact" className={activeSection === "contact" ? "active" : ""}>
            Contact
          </a>
        </li>
        <li>
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;