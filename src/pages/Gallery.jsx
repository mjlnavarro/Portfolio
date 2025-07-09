import "../styles/GalleryLightbox.css";
import GalleryLightbox from "./GalleryLightbox";
import jin1 from "../assets/jin1.jpg";
import jin2 from "../assets/jin2.jpg";

function Gallery() {
  return (
    <section id="gallery" className="card-section scroll-anchor" data-aos="fade-up">
      <h3>Certificates</h3>
      <GalleryLightbox
        images={[
          jin1,jin2
        ]}
      />
    </section>
  );
}

export default Gallery;