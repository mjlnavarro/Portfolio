import React, { useState } from "react";

function GalleryLightbox({ images }) {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="gallery-grid">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            className="gallery-img"
            alt={`Gallery ${i + 1}`}
            onClick={() => setSelected(src)}
          />
        ))}
      </div>

      {selected && (
        <div className="lightbox-overlay" onClick={() => setSelected(null)}>
          <img src={selected} alt="Zoomed View" className="lightbox-image" />
        </div>
      )}
    </>
  );
}

export default GalleryLightbox;