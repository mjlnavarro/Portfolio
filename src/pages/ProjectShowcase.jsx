import React, { useState } from "react";
import "../styles/ProjectShowcase.css";
import GalleryLightbox from "./GalleryLightbox";

import CC_L from "../assets/CC_L.jpg";
import CC_DB from "../assets/CC_DB.jpg";
import CC_R from "../assets/CC_R.jpg";
import CC_RE from "../assets/CC_RE.jpg";
import SC_L from "../assets/SC_L.jpg";
import SC_DB from "../assets/SC_DB.jpg";
import SC_R from "../assets/SC_R.jpg";
import SC_S from "../assets/SC_S.jpg";

const projects = [
  {
    title: "Scholar Connect",
    description:
      "Our system that works like Shopee but we focused on school and college students.",
    tech: ["HTML", "CSS Modules", "DJango"],
    images: [SC_L, SC_DB, SC_R, SC_S],
  },
  {
    title: "Classic Cuts Co.",
    description:
      "A barbershop management system that allows users to book appointments and choose their barber in real time.",
    tech: ["CSS", "HTML", "Tailwind CSS"],
    images: [CC_L, CC_DB, CC_R, CC_RE],
  },
];

function ProjectShowcase() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="card-section scroll-anchor" id="projects" data-aos="fade-up">
      <div className="card-container">
        <h2 className="card-heading">My Projects</h2>
        <div className="project-scroll-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image-stack">
                {project.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${project.title} ${i + 1}`}
                    className="project-img"
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-tech">
                  <strong>Built with:</strong> {project.tech.join(", ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Project" className="lightbox-image" />
        </div>
      )}
    </section>
  );
}

export default ProjectShowcase;