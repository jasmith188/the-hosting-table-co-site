import { gallery } from "../data/gallery.js";

export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="section-wrap gallery-heading">
        <p className="eyebrow">Gallery</p>
        <h2>Food photos from Chef Jimmy’s kitchen.</h2>
      </div>

      <div className="gallery-track" aria-label="Scrollable food photo gallery">
        {gallery.map((photo) => (
          <figure className="gallery-card" key={photo.title}>
            <img src={photo.src} alt={photo.title} />
            <figcaption>{photo.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
