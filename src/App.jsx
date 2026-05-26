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
  { src: steak, title: "Duck Breast" },
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
          <img
  src="/the-hosting-table-co-dijon-logo.png"
  alt="The Hosting Table Co."
  className="hero-logo"
/>
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
          <a href="mailto:chefjimmy@thehostingtableco.com"><Mail size={16} /> chefjimmy@thehostingtableco.com</a>
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

      <footer>
        <p className="footer-brand">The Hosting Table Co.</p>
        <p>Chef Jimmy Smith | <a href="mailto:chefjimmy@thehostingtableco.com">chefjimmy@thehostingtableco.com</a></p>
        <p>Serving Wisconsin Dells, Madison, Baraboo, Lake Delton & surrounding areas.</p>
      </footer>
    </main>
  );
}
