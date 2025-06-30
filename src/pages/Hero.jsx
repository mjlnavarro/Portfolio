import React, { useEffect } from "react";
import "../styles/Hero.css";

function Hero() {
  useEffect(() => {
    const counters = document.querySelectorAll(".stat-number");
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-count");
        const count = +counter.innerText;
        const increment = Math.ceil(target / 40);

        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(updateCount, 30);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hello! I’m Jin</h1>
        <p className="hero-subtitle">
          Designing interfaces with clarity, code, and a touch of ???
        </p>
        <div className="hero-stats">
          <div className="stat" title="Years of experience in creative and technical work">
            <span className="stat-number" data-count="0">0</span>
            <span className="stat-label">Years of Experience</span>
          </div>
          <div className="stat" title="Languages, frameworks, and design tools mastered">
            <span className="stat-number" data-count="7">0</span>
            <span className="stat-label">Tech & Tools Used</span>
          </div>
          <div className="stat" title="Projects built with passion and precision">
            <span className="stat-number" data-count="0">0</span>
            <span className="stat-label">Projects Completed</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;