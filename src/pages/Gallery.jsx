import "../styles/GalleryLightbox.css";
import GalleryLightbox from "./GalleryLightbox";

function Gallery() {
  return (
    <section id="gallery" className="card-section scroll-anchor" data-aos="fade-up">
      <h3>Certificates & Gallery</h3>
      <GalleryLightbox
        images={[
          "/images/jin1.jpg",
          "/images/jin2.jpg",
          "/images/jin3.jpg",
          "/images/jin4.jpg",
        ]}
      />
    </section>
  );
}

export default Gallery;