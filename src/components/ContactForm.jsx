import { useState } from "react";

export default function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");
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

      <form
        name="private-dining-inquiry"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="contact-form"
       onSubmit={async (e) => {
  e.preventDefault();
  if (isSending) return;
  setError("");
  setIsSending(true);

  const form = e.currentTarget;
  const formData = new FormData(form);

  try {
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    });

    if (!response.ok) {
      throw new Error(`Form submission failed: ${response.status}`);
    }

    window.location.href = "/success.html";
  } catch (error) {
    setError("Your inquiry could not be sent. Please try again, call 540-310-8358, or email booking@thehostingtableco.com.");
    setIsSending(false);
  }
}}
      >
        <input type="hidden" name="form-name" value="private-dining-inquiry" />

        <p className="hidden-field" hidden>
          <label>
            Do not fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
          </label>
        </p>

        <div className="form-grid">
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" autoComplete="name" required />
          </label>

          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" autoComplete="email" required />
          </label>

          <label>
            Phone
            <input type="tel" name="phone" placeholder="Your phone number" autoComplete="tel" />
          </label>

          <label>
            Event Date
            <input type="date" name="event-date" />
          </label>

          <label>
            Guest Count
            <input type="number" name="guest-count" min="1" placeholder="Number of guests" />
          </label>

          <label>
            Location
            <input type="text" name="location" placeholder="City or ZIP code" />
          </label>
        </div>

        <label>
          Dining Style
          <select name="dining-style" defaultValue="">
            <option value="" disabled>Select one</option>
            <option>Multi-course plated dinner</option>
            <option>Family-style gathering</option>
            <option>Romantic date night</option>
            <option>Corporate / executive dining</option>
            <option>Vacation rental / Airbnb dinner</option>
            <option>Brunch or breakfast experience</option>
            <option>In-home meal prep</option>
            <option>Postpartum meal support</option>
          </select>
        </label>

        <label>
          Message
          <textarea
            name="message"
            rows="6"
            placeholder="Tell me about the occasion, city, venue or rental property, favorite cuisines, allergies, budget per person, timing, and anything else I should know."
            required
          ></textarea>
        </label>

        <p>Your date is reserved with a 50% deposit after the menu and quote are confirmed.</p>
        {error && <p role="alert">{error}</p>}
        <button type="submit" disabled={isSending} aria-busy={isSending}>
          {isSending ? "Sending…" : "Send My Inquiry"}
        </button>
      </form>
    </section>
  );
}
