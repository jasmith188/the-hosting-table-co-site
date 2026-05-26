import { Utensils, CalendarCheck, DollarSign } from "lucide-react";

export default function ServiceDetails() {
  return (
    <section className="details section-wrap" id="services">
      <div>
        <Utensils className="detail-icon" />
        <h3>Service Styles</h3>
        <ul>
          <li>Multi-course plated dinners</li>
          <li>Family-style gatherings</li>
          <li>Corporate & executive dining</li>
          <li>Vacation rental / Airbnb experiences</li>
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
          <li>Deposit & event confirmation</li>
          <li>Ingredient sourcing & preparation</li>
          <li>In-home cooking & service</li>
          <li>Full kitchen cleanup included</li>
        </ol>
      </div>

      <div>
        <DollarSign className="detail-icon" />
        <h3>Typical Pricing</h3>
        <ul>
          <li>Intimate multi-course dinners: $95–$175+ per guest</li>
          <li>Family-style gatherings: $65–$120 per guest</li>
          <li>Meal prep: starting at $225+/week</li>
          <li>Corporate & executive dining: custom quoted</li>
        </ul>
        <p className="fine-print">
          Premium ingredients, travel, rentals, and staffing quoted separately when applicable.
        </p>
      </div>
    </section>
  );
}
