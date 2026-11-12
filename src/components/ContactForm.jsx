import { useEffect, useState } from "react";

export default function ContactForm() {
  const [error, setError] = useState("");
  useEffect(() => {
    // Load once after React mounts the placement, including in StrictMode.
    const scriptId = "honeybook-placement-controller";
    if (document.getElementById(scriptId)) return;
    window._HB_ = window._HB_ || {};
    window._HB_.pid = "6af5cf8b15ab6a67cf4e9ddb";
    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js";
    script.onerror = () => setError("load-failed");
    document.body.appendChild(script);
  }, []);

  return (
    <section className="contact-section section-wrap" id="contact">
      <div className="contact-copy">
        <p className="eyebrow">An invitation to the table</p>
        <h2>Plan your private chef experience.</h2>
        <p>
          A special evening, a weekend together, or dinner taken care of.
          Share a few details below, and I’ll be in touch to plan a menu around you.
        </p>
        <div className="inquiry-contact-links" aria-label="Contact Chef Jimmy directly">
          <a href="tel:+15403108358">540-310-8358</a>
          <span aria-hidden="true">/</span>
          <a href="mailto:booking@thehostingtableco.com">booking@thehostingtableco.com</a>
        </div>
      </div>

      <div className="honeybook-inquiry" aria-label="Private chef inquiry form">
        <div className="hb-p-6af5cf8b15ab6a67cf4e9ddb-1" />
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.honeybook.com/p.png?pid=6af5cf8b15ab6a67cf4e9ddb"
          alt=""
        />
        {error && <p role="alert">The inquiry form could not load. Please call or text 540-310-8358, or email booking@thehostingtableco.com.</p>}
        <div className="inquiry-booking-note">
          <span className="eyebrow">Made for your table</span>
          <p>Your date is reserved with a 50% deposit after the menu and quote are confirmed.</p>
        </div>
      </div>
      <p className="inquiry-gratuity">
        Already joined us at the table? <a href="https://donate.stripe.com/6oUfZj9k8ese4WBbFE3wQ01" target="_blank" rel="noopener noreferrer">Leave an optional gratuity</a>
      </p>
    </section>
  );
}
