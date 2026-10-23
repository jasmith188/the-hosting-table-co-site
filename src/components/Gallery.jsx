import { gallery } from "../data/gallery.js";

export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="section-wrap gallery-heading">
        <p className="eyebrow">Gallery</p>
        <h2>A look at what’s been on the table.</h2>
      </div>

      <div className="gallery-track" aria-label="Scrollable food photo gallery" tabIndex={0}>
        {gallery.map((photo) => (
          <figure className="gallery-card" key={photo.title}>
            <img src={photo.src} alt={photo.title} loading="lazy" decoding="async" />
            <figcaption>{photo.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
