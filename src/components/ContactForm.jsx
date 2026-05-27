export default function ContactForm() {
  return (
    <section className="contact-section section-wrap" id="contact">
      <div className="contact-copy">
        <p className="eyebrow">Inquire</p>
        <h2>Plan your private dining experience.</h2>
        <p>
          Share your event date, guest count, location, and the style of dinner you have in mind.
          Chef Jimmy will follow up directly to customize the menu and quote.
        </p>
      </div>

      <form
  name="private-dining-inquiry"
  method="POST"
  action="/success.html"
  data-netlify="true"
  netlify-honeypot="bot-field"
  className="contact-form"
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
            <input type="text" name="location" placeholder="City / venue / Airbnb" />
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
            placeholder="Tell me about the occasion, menu preferences, allergies, timing, and anything else I should know."
            required
          ></textarea>
        </label>

        <button type="submit">Submit Inquiry</button>
      </form>
    </section>
  );
}
