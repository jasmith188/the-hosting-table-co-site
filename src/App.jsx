import { Globe, Mail, Utensils, CalendarCheck, DollarSign } from "lucide-react";
import chefJimmy from "./assets/chef-jimmy.jpeg";
import asianChopstick from "./assets/asian-chopstick.jpg";
import burrata from "./assets/burrata.jpg";
import chickenMarsala from "./assets/chicken-marsala.jpg";
import lobsterRavioli from "./assets/lobster-ravioli.jpeg";
import mushroomPasta from "./assets/mushroom-pasta.png";
import scallops from "./assets/scallops-side.jpg";
import steak from "./assets/steak.png";

const menus = [
  {
    title: "Modern Wisconsin",
    courses: [
      { label: "Starter", item: "Jumbo Lump Crab Cake", description: "Corn Succotash, Lemon Dill Remoulade" },
      { label: "First Course", item: "Roasted Butternut Squash Soup", description: "Brown Butter, Sage, Pepitas" },
      { label: "Main Course", item: "Filet Mignon", description: "Garlic Whipped Potatoes, Seasonal Vegetables, Red Wine Demi-Glace" },
      { label: "Dessert", item: "Brandy Old Fashioned Crème Brûlée" },
    ],
  },
  {
    title: "Italian Inspired",
    courses: [
      { label: "Starter", item: "Burrata", description: "Roasted Tomatoes, Basil Oil, Crostini" },
      { label: "First Course", item: "Lobster Ravioli", description: "Cognac Cream, Chives" },
      { label: "Main Course", item: "Chicken Marsala", description: "Wild Mushrooms, Herb Cream Sauce" },
      { label: "Dessert", item: "Tiramisu" },
    ],
  },
  {
    title: "French Countryside",
    courses: [
      { label: "Starter", item: "French Onion Soup", description: "Gruyère Crostini" },
      { label: "First Course", item: "Warm Goat Cheese Salad", description: "Honey, Walnuts, Baby Greens" },
      { label: "Main Course", item: "Duck Breast", description: "Potato Purée, Cherry Gastrique, Roasted Root Vegetables" },
      { label: "Dessert", item: "Vanilla Bean Pot de Crème" },
    ],
  },
  {
    title: "Steak & Seafood",
    courses: [
      { label: "Starter", item: "Seared Scallops", description: "English Pea Purée, Crispy Pancetta" },
      { label: "First Course", item: "Truffle Cauliflower Velouté", description: "Chive Oil, Crème Fraîche" },
      { label: "Main Course", item: "Prime Beef Tenderloin", description: "Potato Purée, Asparagus, Red Wine Reduction" },
      { label: "Dessert", item: "Chocolate Espresso Torte" },
    ],
  },
  {
    title: "Romantic Date Night",
    courses: [
      { label: "Starter", item: "Tuna Tartare", description: "Citrus, Avocado, Sesame Crisp" },
      { label: "First Course", item: "Lobster Bisque", description: "Chive Oil, Crème Fraîche" },
      { label: "Main Course", item: "Miso Glazed Chilean Sea Bass", description: "Jasmine Rice, Bok Choy" },
      { label: "Dessert", item: "Dark Chocolate Lava Cake" },
    ],
  },
  {
    title: "Latin American",
    courses: [
      { label: "Starter", item: "Ahi Tuna Ceviche", description: "Lime, Cilantro, Pickled Red Onion" },
      { label: "First Course", item: "Street Corn Soup", description: "Cotija Cheese, Chili Oil" },
      { label: "Main Course", item: "Carne Asada", description: "Chimichurri, Charred Street Corn, Black Bean Purée" },
      { label: "Dessert", item: "Tres Leches Cake" },
    ],
  },
];

const gallery = [
  { src: burrata, title: "Burrata, Basil Oil & Crostini" },
  { src: chickenMarsala, title: "Chicken Marsala" },
  { src: lobsterRavioli, title: "Lobster Ravioli" },
  { src: mushroomPasta, title: "Mushroom Pasta" },
  { src: scallops, title: "Seared Scallops" },
  { src: steak, title: "Duck Breast / Steakhouse Style Plate" },
  { src: asianChopstick, title: "Asian Inspired Rice Bowl" },
];

function MenuCard({ menu }) {
  return (
    <article className="menu-card">
      <h3>{menu.title}</h3>
      <div className="course-list">
        {menu.courses.map((course) => (
          <div className="course" key={`${menu.title}-${course.label}`}>
            <p className="course-label">{course.label}</p>
            <p className="menu-item"><span className="bullet">•</span>{course.item}</p>
            {course.description && <p className="description">{course.description}</p>}
          </div>
        ))}
      </div>
    </article>
  );
}

export default function App() {
  return (
    <main>
      <section className="hero">
        <div className="brand-row">
          <img src="/the-hosting-table-co-dijon-logo.png" alt="The Hosting Table Co. logo" className="hero-logo" />
          <h1>The Hosting Table Co.</h1>
        </div>

        <div className="gold-divider">
          <span></span>
          <small>✦</small>
          <span></span>
        </div>

        <h2>Private Dining Experiences</h2>
        <p className="tagline">
          Modern minimalist private dining rooted in rustic upscale hospitality,
          refined comfort food, and classic French influence.
        </p>

        <div className="quick-links">
          <a href="https://thehostingtableco.com"><Globe size={16} /> thehostingtableco.com</a>
          <a href="https://www.takeachef.com/en-us/chef/jimmy-smith">Take a Chef Profile</a>
          <a href="#contact"><Mail size={16} /> Start an inquiry</a>
        </div>
      </section>

      <section className="about section-wrap">
        <div className="about-copy">
          <p className="eyebrow">About Chef Jimmy</p>
          <h2>Refined private dining with polished, personal hospitality.</h2>
          <p>
            With nearly 20 years of culinary experience across fine dining, upscale casual,
            and high-volume kitchens, Chef Jimmy Smith creates elevated in-home dining
            experiences tailored to each client and occasion.
          </p>
          <p>
            From intimate date nights and multi-course plated dinners to corporate gatherings
            and family-style celebrations, every menu is customized around seasonality,
            guest preferences, and polished hospitality.
          </p>
        </div>
        <img src={chefJimmy} alt="Chef Jimmy Smith wearing a brown apron" className="chef-photo" />
      </section>

      <section className="section-wrap">
        <p className="eyebrow">Dining Experiences</p>
        <div className="menus-grid">
          {menus.map((menu) => <MenuCard key={menu.title} menu={menu} />)}
        </div>
      </section>


      <section className="custom-menu-note section-wrap">
        <p>
          Menus are starting points only. Every private dining experience can be customized around
          guest preferences, seasonal ingredients, allergies, dietary needs, and the style of event.
          Clients may swap courses, adjust ingredients, or build a completely custom menu with Chef Jimmy.
        </p>
      </section>



      <section className="meal-prep-section section-wrap" id="meal-prep">
        <div className="meal-prep-copy">
          <p className="eyebrow">In-Home Meal Prep</p>
          <h2>Weekly meals prepared in your kitchen.</h2>
          <p>
            The Hosting Table Co. also offers in-home meal preparation for busy families,
            professionals, new parents, and anyone who wants chef-prepared meals ready for the week.
          </p>
          <p>
            Chef Jimmy can cook in your home, package meals for easy reheating, label everything clearly,
            and leave your kitchen cleaned up before leaving.
          </p>
          <p className="postpartum-note">
            Postpartum and new parent services are available, with nourishing comfort-focused meals,
            freezer-friendly options, and flexible menus built around family preferences.
          </p>
        </div>

        <div className="meal-prep-cards">
          <article>
            <h3>3 Meals / Week</h3>
            <p className="price">Starting at $225–$325</p>
            <p>Great for light weekly support, lunches, or a few ready-to-heat dinners.</p>
          </article>

          <article>
            <h3>4 Meals / Week</h3>
            <p className="price">Starting at $300–$425</p>
            <p>Ideal for couples, small families, or anyone wanting more consistent weekly coverage.</p>
          </article>

          <article>
            <h3>5 Meals / Week</h3>
            <p className="price">Starting at $375–$550</p>
            <p>Best for full weekly meal support, postpartum care, or busy family schedules.</p>
          </article>

          <p className="meal-prep-disclaimer">
            Pricing varies by portions, dietary needs, groceries, travel, packaging, and menu complexity.
            Grocery cost is separate unless quoted otherwise.
          </p>
        </div>
      </section>


      <section className="gallery-section">
        <div className="section-wrap gallery-heading">
          <p className="eyebrow">Gallery</p>
          <h2>Food photos from Chef Jimmy’s kitchen.</h2>
        </div>
        <div className="gallery-track" aria-label="Scrollable food photo gallery">
          {gallery.map((photo) => (
            <figure className="gallery-card" key={photo.title}>
              <img src={photo.src} alt={photo.title} />
              <figcaption>{photo.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="details section-wrap">
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
            <li>Corporate & executive dining: custom quoted</li>
          </ul>
          <p className="fine-print">Premium ingredients, travel, rentals, and staffing quoted separately when applicable.</p>
        </div>
      </section>


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


      <footer>
        <p className="footer-brand">The Hosting Table Co.</p>
        <p>Chef Jimmy Smith | <a href="mailto:chefjimmy@thehostingtableco.com">chefjimmy@thehostingtableco.com</a></p>
        <p>Serving Wisconsin Dells, Madison, Baraboo, Lake Delton & surrounding areas.</p>
      </footer>
    </main>
  );
}
