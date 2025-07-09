import React, { useEffect, useRef, useState } from "react";
import "./styles/global.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import Stats from "./pages/Stats";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import ProjectShowcase from "./pages/ProjectShowcase";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import SocialBar from "./pages/SocialBar";

function App() {
  const containerRef = useRef(null);
  const [theme, setTheme] = useState("dark");

  // AOS animation setup
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // Scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      const progressBar = document.getElementById("scrollProgressBar");
      if (progressBar) {
        progressBar.style.height = `${scrollPercent}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load saved theme
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      document.body.classList.add("light-theme");
      setTheme("light");
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const isLight = document.body.classList.toggle("light-theme");
    const newTheme = isLight ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="portfolio-container" ref={containerRef}>
      <div className="scroll-progress-bar-vertical" id="scrollProgressBar"></div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <SocialBar /> {/* ✅ Social bar added here */}
      <Hero />
      <Stats />
      <About />
      <Experience />
      <Skills />
      <ProjectShowcase />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;