import { Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-brand-lockup">
        {/* <img src="/the-hosting-table-co-dijon-logo.png" alt="" className="hero-logo" /> */}
        <div className="hero-brand-name">The Hosting Table Co.</div>
      </div>

      <div className="gold-divider hero-divider" aria-hidden="true">
        <span></span><small>✦</small><span></span>
      </div>

      <h1 className="hero-search-title">Private Chef in Fredericksburg, VA</h1>
      <p className="hero-subtitle">Elevated dining, thoughtfully prepared and served in the comfort of your home.</p>

      <div className="hero-actions">
        <a className="button-dark" href="#menus">Explore Menus</a>
        <a className="button-outline" href="#contact">Plan Your Dinner</a>
      </div>

      <p className="hero-service-area">Serving Fredericksburg, Stafford, Spotsylvania, Lake Anna &amp; Northern Virginia</p>
      <a className="hero-phone" href="tel:+15403108358"><Phone size={15} /> 540-310-8358</a>
    </section>
  );
}
