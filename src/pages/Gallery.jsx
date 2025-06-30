import "../styles/GalleryLightbox.css";
import GalleryLightbox from "./GalleryLightbox";

function Gallery() {
  return (
    <section id="gallery" className="card-section scroll-anchor" data-aos="fade-up">
      <h3>Certificates & Gallery</h3>
      <GalleryLightbox
        images={[
          "../public/images/jin1.jpg",
          "../public/images/jin2.jpg",
          "../public/images/jin3.jpg",
          "../public/images/jin4.jpg",
        ]}
      />
    </section>
  );
}

export default Gallery;