import { Globe, Mail, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="brand-row">
        <img src="/the-hosting-table-co-dijon-logo.png" alt="The Hosting Table Co. logo" className="hero-logo" />
        <div className="brand-name">The Hosting Table Co.</div>
      </div>

      <div className="gold-divider">
        <span></span>
        <small>✦</small>
        <span></span>
      </div>

      <h1 className="hero-search-title">Private Chef in Fredericksburg, VA</h1>
      <h2>In-Home Dining, Celebrations & Personal Chef Service</h2>
      <p className="tagline">
        Refined private dining, vacation rental dinners, weekly meal prep, and family-style hospitality
        serving Fredericksburg, Stafford, Spotsylvania, Northern Virginia, and nearby destinations.
      </p>

      <div className="hero-actions">
        <a className="button-dark" href="#contact">Request a Private Chef Quote</a>
        <a className="button-outline" href="tel:+16084770652"><Phone size={16} /> Call 608-477-0652</a>
      </div>

      <div className="quick-links">
        <a href="https://thehostingtableco.com"><Globe size={16} /> thehostingtableco.com</a>
        <a href="https://www.takeachef.com/en-us/chef/jimmy-smith" target="_blank" rel="noreferrer">Take a Chef Profile</a>
        <a href="mailto:booking@thehostingtableco.com"><Mail size={16} /> booking@thehostingtableco.com</a>
      </div>
    </section>
  );
}
