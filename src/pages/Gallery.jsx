import "../styles/GalleryLightbox.css";
import GalleryLightbox from "./GalleryLightbox";
import jin1 from "../assets/jin1.jpg";
import jin2 from "../assets/jin2.jpg";
import jin3 from "../assets/jin3.jpg";
import jin4 from "../assets/jin4.jpg";

function Gallery() {
  return (
    <section id="gallery" className="card-section scroll-anchor" data-aos="fade-up">
      <h3>Certificates & Gallery</h3>
      <GalleryLightbox
        images={[
          jin1,jin2,jin3,jin4
        ]}
      />
    </section>
  );
}

export default Gallery;