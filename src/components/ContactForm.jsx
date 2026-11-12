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
        <p className="eyebrow">Inquire</p>
        <h2>Plan your private chef experience.</h2>
        <p>
          Share your event date, guest count, location, and the style of dinner you have in mind.
          Chef Jimmy will follow up directly to customize the menu and quote.
        </p>
        <div className="direct-contact-card">
          <strong>Prefer to reach out directly?</strong>
          <a href="tel:+15403108358">Call or text 540-310-8358</a>
          <a href="mailto:booking@thehostingtableco.com">booking@thehostingtableco.com</a>
        </div>
         <div className="direct-contact-card payment-card">
          <strong>Optional Gratuities</strong>

          <a
            href="https://donate.stripe.com/6oUfZj9k8ese4WBbFE3wQ01"
            target="_blank"
            rel="noopener noreferrer"
          >
            Leave a Gratuity 
          </a>

          {/* <p><strong>Zelle:</strong> jimmy@thehostingtableco.com</p> */}

          {/* <p><strong>Venmo:</strong> @jasmith188</p> */}

          <small>
            Thank you for supporting The Hosting Table Co. Event deposits and balances are arranged by invoice.
          </small>
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
        <p>Your date is reserved with a 50% deposit after the menu and quote are confirmed.</p>
      </div>
    </section>
  );
}
