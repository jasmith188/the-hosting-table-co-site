import { Phone, Mail } from "lucide-react";

export default function ConversionBanner() {
  return (
    <section className="conversion-banner section-wrap" aria-label="Book a private chef in Fredericksburg and Northern Virginia">
      <div>
        <p className="eyebrow">Let’s plan your dinner</p>
        <h2>What are you celebrating?</h2>
        <p>
          Share your date, guest count, location, and menu style. Chef Jimmy will help you build a private dining experience
          that fits the occasion, kitchen, timing, and budget.
        </p>
      </div>
      <div className="conversion-actions">
        <a className="button-dark" href="#contact">Request a Quote</a>
        <a className="button-outline" href="tel:+15403108358"><Phone size={16} /> Call 540-310-8358</a>
        <a className="button-outline" href="mailto:booking@thehostingtableco.com"><Mail size={16} /> Email Jimmy</a>
      </div>
    </section>
  );
}
