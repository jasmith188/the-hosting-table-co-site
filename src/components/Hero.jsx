import { Globe, Mail, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="brand-row">
        <img src="/the-hosting-table-co-dijon-logo.png" alt="The Hosting Table Co. logo" className="hero-logo" />
        <h1>The Hosting Table Co.</h1>
      </div>

      <div className="gold-divider">
        <span></span>
        <small>✦</small>
        <span></span>
      </div>

      <h2>Private Chef & In-Home Dining in South Central Wisconsin</h2>
      <p className="tagline">
        Refined private dining, vacation rental dinners, weekly meal prep, and family-style hospitality
        serving Baraboo, Wisconsin Dells, Lake Delton, Madison, Waunakee, Sun Prairie, and surrounding areas.
      </p>

      <div className="hero-actions">
        <a className="button-dark" href="#contact">Request a Private Chef Quote</a>
        <a className="button-outline" href="tel:+16084770652"><Phone size={16} /> Call 608-477-0652</a>
      </div>

      <div className="quick-links">
        <a href="https://thehostingtableco.com"><Globe size={16} /> thehostingtableco.com</a>
        <a href="https://www.takeachef.com/en-us/chef/jimmy-smith" target="_blank" rel="noreferrer">Take a Chef Profile</a>
        <a href="mailto:jimmy@thehostingtableco.com"><Mail size={16} /> jimmy@thehostingtableco.com</a>
      </div>
    </section>
  );
}
