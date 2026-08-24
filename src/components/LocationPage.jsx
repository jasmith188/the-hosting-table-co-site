import Header from "./Header.jsx";
import ContactForm from "./ContactForm.jsx";
import Footer from "./Footer.jsx";
import Gallery from "./Gallery.jsx";
import Reviews from "./Reviews.jsx";
import { locations } from "../data/locations.js";

export default function LocationPage({ location }) {
  return <main>
    <Header />
    <section className="location-hero section-wrap">
      <a className="location-brand" href="/">The Hosting Table Co.</a>
      <p className="eyebrow">{location.eyebrow}</p>
      <h1>{location.h1}</h1>
      <p className="location-lead">{location.intro}</p>
      <div className="hero-actions">
        <a className="button-dark" href="#contact">Request a Private Chef Quote</a>
        <a className="button-outline" href="tel:+16084770652">Call 608-477-0652</a>
      </div>
    </section>

    <section className="location-content section-wrap">
      <div className="location-copy">
        <p className="eyebrow">Private Dining, Your Table</p>
        <h2>A custom chef experience in {location.name}</h2>
        {location.body.map((p) => <p key={p}>{p}</p>)}
        <h3>Areas served</h3><p>{location.areas}.</p>
      </div>
      <aside className="location-services">
        <h2>Popular Experiences</h2>
        <ul>
          <li>Birthday & anniversary dinners</li><li>Date-night private dining</li><li>Family-style celebrations</li>
          <li>Vacation rental & Airbnb dining</li><li>Multi-course plated dinners</li><li>Weekly in-home meal prep</li>
        </ul>
        <a className="button-dark" href="/#menus">Explore Sample Menus</a>
      </aside>
    </section>

    <section className="location-links section-wrap">
      <p className="eyebrow">Nearby Service Areas</p>
      <div className="location-link-grid">
        {Object.entries(locations).filter(([, l]) => l.name !== location.name).map(([path,l]) =>
          <a key={path} href={path}><strong>{l.h1}</strong><span>Explore private chef service →</span></a>)}
      </div>
    </section>
    <Gallery /><Reviews /><ContactForm /><Footer />
  </main>;
}
