import "../styles/experience.css";

function Experience() {
  return (
    <section id="experience" className="card-section scroll-anchor" data-aos="fade-up">
      <h3>Experience</h3>
      <div className="timeline">
        <div className="timeline-step">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h4>Rookie Frontend Developer</h4>
            <p>Structured portfolio systems using JSX and modular CSS. Used React, Git, and VS Code, but still a newbie.</p>
          </div>
        </div>
        <div className="timeline-step">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h4>Rookie UI/UX Designer</h4>
            <p>Created intuitive wireframes and visual mockups in Figma ONLY :D.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;