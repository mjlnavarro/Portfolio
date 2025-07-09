import "../styles/skills.css";

function Skills() {
  return (
    <section id="skills" className="card-section scroll-anchor" data-aos="fade-up">
      <h3>Skills</h3>
      <ul className="list-info">
        <li title="Bends the DOM to my will 💅"><strong>Frontend:</strong> HTML, CSS, React</li>
        <li title="Figma frameworks & Canva chaos wizardry"><strong>Design Tools:</strong> Figma, Canva</li>
        <li title="Ctrl+Z is my best friend ⚙️"><strong>Tech:</strong> Git, VS Code, Microsoft Office, C++</li>
        <li title="Can pitch an idea and code it too."><strong>Soft Skills:</strong> Communication, Flexibility, Collaboration</li>
      </ul>
    </section>
  );
}

export default Skills;