export default function ContactForm() {
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
          <a href="tel:+16084770652">Call or text 608-477-0652</a>
          <a href="mailto:booking@thehostingtableco.com">booking@thehostingtableco.com</a>
        </div>
         <div className="direct-contact-card payment-card">
          <strong>Payments & Gratuities</strong>

          <a
            href="https://donate.stripe.com/6oUfZj9k8ese4WBbFE3wQ01"
            target="_blank"
            rel="noopener noreferrer"
          >
            Support Your Chef 
          </a>

          {/* <p><strong>Zelle:</strong> jimmy@thehostingtableco.com</p> */}

          {/* <p><strong>Venmo:</strong> @jasmith188</p> */}

          <small>
            Thank you for supporting The Hosting Table Co.
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
    console.error(error);
    alert(
      "Sorry, there was a problem sending your inquiry. Please try again or contact me directly."
    );
  }
}}
      >
        <input type="hidden" name="form-name" value="private-dining-inquiry" />

        <p className="hidden-field">
          <label>
            Do not fill this out: <input name="bot-field" />
          </label>
        </p>

        <div className="form-grid">
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>

          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>

          <label>
            Phone
            <input type="tel" name="phone" placeholder="Your phone number" />
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
            <input type="text" name="location" placeholder="Fredericksburg, Stafford, Spotsylvania, NOVA, etc." />
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
            placeholder="Tell me about the occasion, city, venue or rental property, menu preferences, allergies, timing, and anything else I should know."
            required
          ></textarea>
        </label>

        <button type="submit">Submit Inquiry</button>
      </form>
    </section>
  );
}
