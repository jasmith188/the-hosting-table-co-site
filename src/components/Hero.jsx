import { Globe, Mail } from "lucide-react";

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

      <h2>Private Dining Experiences</h2>
      <p className="tagline">
        Modern minimalist private dining rooted in rustic upscale hospitality,
        refined comfort food, and classic French influence.
      </p>

      <div className="quick-links">
        <a href="https://thehostingtableco.com"><Globe size={16} /> thehostingtableco.com</a>
        <a href="https://www.takeachef.com/en-us/chef/jimmy-smith">Take a Chef Profile</a>
        <a href="#contact"><Mail size={16} /> Start an inquiry</a>
      </div>
    </section>
  );
}
