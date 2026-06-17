import { Phone, Mail } from "lucide-react";

export default function ConversionBanner() {
  return (
    <section className="conversion-banner section-wrap" aria-label="Book a private chef in Wisconsin">
      <div>
        <p className="eyebrow">Now Booking Wisconsin Events</p>
        <h2>Hosting in Baraboo, Wisconsin Dells, Madison, Waunakee or Sun Prairie?</h2>
        <p>
          Share your date, guest count, location, and menu style. Chef Jimmy will help you build a private dining experience
          that fits the occasion, kitchen, timing, and budget.
        </p>
      </div>
      <div className="conversion-actions">
        <a className="button-dark" href="#contact">Request a Quote</a>
        <a className="button-outline" href="tel:+16084770652"><Phone size={16} /> Call 608-477-0652</a>
        <a className="button-outline" href="mailto:jimmy@thehostingtableco.com"><Mail size={16} /> Email Jimmy</a>
      </div>
    </section>
  );
}
