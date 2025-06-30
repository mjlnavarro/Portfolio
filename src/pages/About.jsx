import "../styles/about.css";

function About() {
  return (
    <section id="about" className="card-section scroll-anchor" data-aos="fade-up">
      <h3>About Me</h3>
      <p>
        I’m a passionate and goal-driven creative with a strong interest in brand identity,
        UI/UX design, and immersive digital experiences. I believe in learning new things,
        improving what I already know, and growing alongside teams that value quality work.
      </p>
      <ul className="info-grid">
        <li><strong>Age:</strong> 21</li>
        <li><strong>Birthday:</strong> 06/15/2003</li>
        <li><strong>Status:</strong> Single</li>
        <li><strong>Nationality:</strong> Filipino</li>
        <li><strong>Sex:</strong> Male</li>
        <li><strong>Height:</strong> 5'9</li>
        <li><strong>Religion:</strong> Roman Catholic</li>
        <li><strong>Weight:</strong> 80kg</li>
      </ul>
    </section>
  );
}

export default About;