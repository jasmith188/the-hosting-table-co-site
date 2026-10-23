import { Utensils, CalendarCheck, DollarSign } from "lucide-react";

export default function ServiceDetails() {
  return (
    <section className="details section-wrap" id="services">
      <div>
        <Utensils className="detail-icon" />
        <h3>Service Styles</h3>
        <ul>
          <li>Private chef dinners in your home</li>
          <li>Virginia vacation rental / Airbnb experiences</li>
          <li>Multi-course plated dinners</li>
          <li>Family-style gatherings</li>
          <li>Corporate & executive dining</li>
          <li>Romantic dinners</li>
          <li>Brunch & breakfast experiences</li>
          <li>In-home meal prep</li>
        </ul>
      </div>

      <div>
        <CalendarCheck className="detail-icon" />
        <h3>Booking Process</h3>
        <ol>
          <li>Initial consultation & event details</li>
          <li>Customized menu creation</li>
          <li>50% deposit to reserve your date</li>
          <li>Final guest count confirmed 5 days before your event</li>
          <li>Remaining balance due 48 hours before your event</li>
          <li>Ingredient sourcing, in-home cooking, service & kitchen cleanup</li>
        </ol>
      </div>

      <div>
        <DollarSign className="detail-icon" />
        <h3>Typical Pricing</h3>
        <ul>
          <li>Intimate multi-course dinners: $162–$208+ per guest</li>
          <li>Family-style gatherings: from $85 per guest</li>
          <li>Meal prep: starting at $225+/week</li>
          <li>Corporate & executive dining: custom quoted</li>
        </ul>
        <p className="fine-print">
          Your final quote confirms what is included. Premium ingredients, travel, rentals, and staffing may affect pricing. Your date is reserved once the deposit is received.
        </p>
      </div>
    </section>
  );
}
